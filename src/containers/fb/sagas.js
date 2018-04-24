import { take, put, call, fork, all } from 'redux-saga/effects'

import api from './api'
import C from './constants'

function* signInAsync(model, history) {
    console.log('sign in saga')
    yield put({ type: C.Identity.BeginSignIn })
    try {
        const resp = yield call(api.Identity.SignIn, model)
        if (resp.status === 200) {
            yield fork(setupToken, resp.data.token)
        }
        yield put({ type: C.Identity.SuccessSignIn })
        history.push('/feed')
    }
    catch(e)
    {
        console.log(e)
        yield put({ type: C.Identity.FailedSignIn })
    }
}

function* setupToken(token) {
    localStorage.setItem('auth_token', token)
    yield call(api.setAuthToken, token)
    yield put({ type: C.Identity.SetToken, payload: token })
    yield put({ type: C.Self.Fetch })
}

function* checkToken() {
    const token = localStorage.getItem('auth_token')
    if (token) {
        yield call(api.setAuthToken, token)
        yield put({ type: C.Identity.SetToken, payload: token })
        yield put({ type: C.Self.Fetch })    
    }
}

function* fetchAllUsers() {
    try {
        const resp = yield call(api.users.get)
        if (resp.status === 200) {
            yield put({ type: C.Users.SetList, payload: resp.data })
        }
    }
    catch(e){
        console.log(e)
    }
}

function* selfFetch() {
    console.log('self fetching')
    try {
        const resp = yield call(api.self.profile.get)
        if (resp.status === 200) {
            yield put({ type: C.Self.SetProfile, payload: resp.data })

            const id = resp.data.id
            const [feed, wall] = yield all([
                call(api.posts.feed, id),
                call(api.posts.wall, id)
            ])

            yield put({ type: C.Self.SetFeed, payload: feed.data })
            yield put({ type: C.Self.SetWall, payload: wall.data })
        }
    }
    catch(e) {
        console.log(e)
    }
}

function* logOut(history) {
    localStorage.removeItem('auth_token')
    yield call(api.clearAuthToken)
    yield put({ type: C.Identity.ClearToken })   
    history.push('/') 
}

// WATCHERS

function* watchSignIn() {
    while(true) {
        const {payload: {model, history}} = yield take(C.Identity.SignIn)
        yield fork(signInAsync, model, history)
    }
}

function* watchSetupToken() {
    while(true) {
        const { payload: token } = yield take(C.Identity.SetupToken)
        yield fork(setupToken, token)
    }
}

function* watchInit() {
    while(true) {
        yield take(C.Init)
        yield fork(checkToken)
    }
}

function* watchFetchAllUsers() {
    while(true) {
        yield take(C.Users.GetAll)
        yield fork(fetchAllUsers)
    }
}

function* watchSelfFetch() {
    while(true) {
        yield take(C.Self.Fetch)
        yield fork(selfFetch)
    }
}

function* watchLogOut() {
    while(true) {
        const { payload: { history }} = yield take(C.Identity.LogOut)
        yield fork(logOut, history)
    }
}

export default function* root() {
    yield all([
        fork(watchInit),
        fork(watchSignIn),
        fork(watchSetupToken),
        fork(watchFetchAllUsers),
        fork(watchSelfFetch),
        fork(watchLogOut)
    ])
}
import { delay } from 'redux-saga'
import { take, put, call, fork, select, all } from 'redux-saga/effects'

import api from './api'
import C from './constants'

function* signInAsync(model, history) {
    yield put({ type: C.Identity.BeginSignIn })
    try {
        var resp = yield call(api.Identity.SignIn, model)
        if (resp.status === 200) {
            yield put({ type: C.Identity.SetToken, payload: resp.data.token })
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
    yield call(api.setAuthToken, token)
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
        const { payload: token } = yield take(C.Identity.SetToken)
        yield fork(setupToken, token)
    }
}


export default function* root() {
    yield all([
        fork(watchSignIn),
    ])
}
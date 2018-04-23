import C from '../constants'

export const setToken = token => ({ type: C.Identity.SetToken, payload: token })

export const beginSignin = () => ({type: C.Identity.BeginSignIn})
export const successSignin = token => ({type: C.Identity.SuccessSignIn, payload: token})
export const failedSignin = () => ({type: C.Identity.FailedSignIn})

function action(type, model) {
  return {type: type, payload: model}
}

export const signIn = (model, history) => {
  return { type: C.Identity.SignIn, payload: { model, history } }
}

export const logOut = (history) => {
  return { type: C.Identity.LogOut, payload: { history }}
}

export const init = () => {
  return { type: C.Init }
}

export const fetchAllUsers = () => action(C.Users.GetAll)
export const fetchProfile = (id) => action(C.Users.FetchProfile, id)
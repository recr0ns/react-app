import C from '../constants'

export const setToken = token => ({ type: C.Identity.SetToken, payload: token })

export const beginSignin = () => ({type: C.Identity.BeginSignIn})
export const successSignin = token => ({type: C.Identity.SuccessSignIn, payload: token})
export const failedSignin = () => ({type: C.Identity.FailedSignIn})


export const signIn = (model, history) => {
    return { type: C.Identity.SignIn, payload: { model, history } }
}
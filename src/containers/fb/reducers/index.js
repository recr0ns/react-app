import C from '../constants'

const initialState = {
  auth: {
    token: null,
    isAuthorized: false,
    signingIn: false,
    signingUp: false,
  },
  profile: {
  },
}

const facebook = (state = initialState, action) => {
  switch (action.type) {
    case C.Identity.SetToken:
      return { ...state, auth: { ...state.auth, token: action.payload, isAuthorized: true }}
    case C.Identity.BeginSignIn:
      return {...state, auth: { ...state.auth, signingIn: true}}
    case C.Identity.SuccessSignIn:
    case C.Identity.FailedSignIn:
      return {...state, auth: { ...state.auth, signingIn: false}}
    default:
      return state
  }
}

export default facebook
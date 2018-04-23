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
  users: [],
  profiles: {
  }
}

const facebook = (state = initialState, action) => {
  switch (action.type) {
    case C.Identity.SetToken:
      return { ...state, auth: { ...state.auth, token: action.payload, isAuthorized: true }}
    case C.Identity.ClearToken:
      return initialState
    case C.Identity.BeginSignIn:
      return {...state, auth: { ...state.auth, signingIn: true}}
    case C.Identity.SuccessSignIn:
    case C.Identity.FailedSignIn:
      return {...state, auth: { ...state.auth, signingIn: false}}
    case C.Users.SetList:
      return {...state, users: action.payload}
    case C.Self.SetProfile:
      return {...state, profile: {...state.profile, ...action.payload}}
    case C.Self.SetFeed:
      return {...state, profile: {...state.profile, feed: action.payload}}
    case C.Self.SetWall:
      return {...state, profile: {...state.profile, wall: action.payload}}
    case C.Users.SetProfile:
      return {...state, profiles: {...state.profile, ...{ [action.payload.id]: action.payload }}}    
    default:
      return state
  }
}

export default facebook
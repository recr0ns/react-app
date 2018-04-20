import C from '../constants'

const initialState = {
  auth: {
    token: null,
    isAuthorized: false
  },
  profile: {
  },
}

const facebook = (state = initialState, action) => {
  switch (action.type) {
    case C.Identity.SetToken:
      return { ...state, auth: { token: action.payload, isAuthorized: true }}
    default:
      return state
  }
}

export default facebook
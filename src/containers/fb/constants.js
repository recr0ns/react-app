export default {
  Init: Symbol('INIT'),
  Navigate : Symbol('NAVIGATE'),
  Identity : {
    SetToken: Symbol('SET_TOKEN'),
    ClearToken: Symbol('CLEAR_TOKEN'),
    SetupToken: Symbol('SETUP_TOKEN'),
    SignIn : Symbol('SIGN_IN'),
    BeginSignIn: Symbol('SIGN_IN__REQUEST'),
    SuccessSignIn: Symbol('SIGN_IN__SUCCESS'),
    FailedSignIn: Symbol('SIGN_IN__FAILED'),
    SignUp : request('SignUp'),
    LogOut : Symbol(),
  },
  Self : {
    SetProfile: Symbol('SELF__SET_PROFILE'),
    SetFeed: Symbol('SELF__SET_FEED'),
    SetWall: Symbol('SELF__SET_WALL'),

    Fetch: Symbol('SELF__FETCH'),
    Get : Symbol(),
    Update : Symbol(), 
    Delete : Symbol(),
    UpdatePhoto: Symbol(),

    Posts: {
      Create: Symbol()
    }
  },
  Users: {
    GetAll: Symbol('USERS__GET_ALL'), // request('Users_GetAll'),
    GetSingle: request('Users_GetSingle'),
    SetList: Symbol('USERS__SET_LIST'),
    FetchProfile: Symbol('USERS__FETCH_PROFILE'),
  }
}


function request(action) {
  const ACTION = 'Action'
  const REQUEST = 'Request'
  const SUCCESS = 'Success'
  const FAILED = 'Failed'

  return [ACTION, REQUEST, SUCCESS, FAILED]
    .map(postfix => {
      const key = `${action}${postfix}`
      console.log(key)
      return { [key] : Symbol(`${action}_${postfix}`)}
    })
    .reduce((acc, current) => { return Object.assign(acc, current)}, {})
}
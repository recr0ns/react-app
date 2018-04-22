export default {
  Navigate : Symbol('NAVIGATE'),
  Identity : {
    SetToken: Symbol(),
    SignIn : Symbol('SIGN_IN'),
    BeginSignIn: Symbol('SIGN_IN__REQUEST'),
    SuccessSignIn: Symbol('SIGN_IN__SUCCESS'),
    FailedSignIn: Symbol('SIGN_IN__FAILED'),
    SignUp : Symbol(),
    LogOut : Symbol(),
  },
  Self : {
    Get : Symbol(),
    Update : Symbol(), 
    Delete : Symbol(),
    UpdatePhoto: Symbol(),

    Posts: {
      Create: Symbol()
    }
  }
}
const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        loginSuccess: true,
        user: action.data.data
        // token:action.data.token
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loginSuccess: true,
        user: action.payload,
        isLoggin: true,
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        loginSuccess: false,
        error: action.error
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        loginSuccess: false
      };
    case 'SIGNUP':
      return {
        ...state,
        user: action.data.data,
        registrationSuccess: true,
        isAuthenticated: true
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        error: action.error,
        registrationSuccess: false,
        isAuthenticated: false
      };
    case 'ONBOARD':
      return {
        ...state,
        registrationSuccess: true,
        onBoardSuccess: true,
        isAuthenticated: true
      };
    case 'ONBOARD_FAILURE':
      return {
        ...state,
        error: action.error,
        registrationSuccess: false
      };

    case 'EMAIL_RECOVERY':
      return {
        ...state,
        error: null,
        message: action.data.message,
        recoverySuccessful: true
      };
    case 'RECOVERY_FAILED':
      return {
        ...state,
        error: action.error,
        recoverySuccessful: false
      };
    default:
      break;
  }
};
export default AuthReducer;

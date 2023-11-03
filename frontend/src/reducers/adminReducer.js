export const adminReducer = (state = { adminuser: {} }, action) => {
    switch(action.type){
  
        case 'LOGIN_REQUEST_ADMIN':
            return {
                loading: true,
                isAuthenticated: false,
              };
  
      case 'LOGIN_SUCCESS_ADMIN':
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
          };
  
   
    case 'LOGOUT_SUCCESS_ADMIN':
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
  
       case 'LOGIN_FAIL_ADMIN':
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
              };
  
  
        case 'LOGOUT_FAIL_ADMIN':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
  
  case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null,
      };
  
    default:
      return state;
    }
  
  
  }
  
  
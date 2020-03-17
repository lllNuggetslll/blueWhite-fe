import {
  UPDATE_USER,
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER
} from "./../actions/userActions";

const initialState = {
  userLoggedIn: localStorage.user_id && localStorage.token,
  userInfo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
    case FETCH_USER:
      return { ...state, userInfo: action.payload };

    case LOGIN_USER:
      return { ...state, userLoggedIn: true };

    case LOGOUT_USER:
      return { userLoggedIn: false, userInfo: {} };
    default:
      return state;
  }
};

import { LOGIN_USER, LOGOUT_USER } from './../actions/loginActions';
import { UPDATE_USER, FETCH_USER } from './../actions/userActions';

const initialState = {
  loggedIn: false,
  userInfo: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER:
    case FETCH_USER:
      return action.payload

    default:
      return state;
  }
}

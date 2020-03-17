import { fetchUser, updateUser } from "./../API/userAPI";

export const UPDATE_USER = "UPDATE_USER";
export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const fetchUserData = () => {
  return async dispatch => {
    try {
      const id = localStorage.user_id;
      const data = await fetchUser(id);

      dispatch({ type: FETCH_USER, payload: data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateUserData = userFormnInfo => {
  return async dispatch => {
    try {
      const id = localStorage.user_id;
      await updateUser(id, userFormnInfo);
      const data = await fetchUser(id);

      dispatch({ type: UPDATE_USER, payload: data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoggedInUser = () => {
  return { type: LOGIN_USER, payload: null };
};

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");

    dispatch({ type: LOGOUT_USER });
  };
};

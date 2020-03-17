import { useEffect } from "react";
import { node, object, func, bool } from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { fetchUserData } from "./../actions/userActions";

const WithUser = ({ children, userInfo, fetchUserData, userLoggedIn }) => {
  useEffect(() => {
    if (userLoggedIn && isEmpty(userInfo) && localStorage.user_id) {
      isEmpty(userInfo) && localStorage.user_id && fetchUserData();
    }
  }, [userInfo, userLoggedIn]);

  return children({ userInfo });
};

const mapStateToProps = state => {
  return {
    userInfo: state.userReducer.userInfo,
    userLoggedIn: state.userReducer.userLoggedIn
  };
};

WithUser.propTypes = {
  children: node.isRequired,
  userInfo: object.isRequired,
  fetchUserData: func.isRequired,
  userLoggedIn: bool.isRequired
};

export default connect(
  mapStateToProps,
  { fetchUserData }
)(WithUser);

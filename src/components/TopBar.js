import React from "react";
import { connect } from "react-redux";
import { func, object, bool } from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { withRouter } from "react-router";

import { logoutUser } from "./../actions/userActions";

const TopBarContainer = styled.div`
  position: fixed;
  bottom: 1000px;
  width: 100%;
`;

const TopBar = ({ userLoggedIn, history, logoutUser }) => {
  const logout = () => {
    logoutUser();
    history.push("/");
  };

  const navToProfile = () => {
    history.push("/profile");
  };

  const navToAccount = () => {
    history.push("/account");
  };

  const navToTransfer = () => {
    history.push("/transfer");
  };

  return (
    <TopBarContainer>
      {userLoggedIn ? (
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navToAccount()}>
              Account
            </Button>
            <Button color="inherit" onClick={() => navToProfile()}>
              Profile
            </Button>
            <Button color="inherit" onClick={() => navToTransfer()}>
              Transfer
            </Button>
            <Button color="inherit" onClick={() => logout()}>
              log Out
            </Button>
          </Toolbar>
        </AppBar>
      ) : null}
    </TopBarContainer>
  );
};

const mapStateToProps = state => {
  return {
    userLoggedIn: state.userReducer.userLoggedIn
  };
};

TopBar.defaultProps = {
  userLoggedIn: false
};

TopBar.propTypes = {
  userLoggedIn: bool,
  history: object.isRequired,
  logoutUser: func.isRequired
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(TopBar));

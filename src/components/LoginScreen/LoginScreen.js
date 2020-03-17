import React, { useState, useEffect, Fragment } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import logo from "./../../assets/logo.png";

import { LoginForm } from "./components";
import { setLoggedInUser } from "./../../actions/userActions";
import { loginUser, getUserCount, createUser } from "./../../API/userAPI";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`;

const Logo = styled.img`
  height: 200px;
  margin-bottom: 50px;
`;

const ErrorText = styled.div`
  color: red;
  position: absolute;
  top: 777px;
`;

const LoginScreen = ({ history, setLoggedInUser }) => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    localStorage.token && history.push("/account");
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const {
        data: { userCount }
      } = await getUserCount();

      setUserCount(userCount);
    };

    getUsers();
  }, []);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [mode]);

  const toggleMode = () => {
    const toggle = mode === "login" ? "signup" : "login";

    setHasError(false);
    setMode(toggle);
  };

  const handleUpdate = (field, e) => {
    const { value } = e.target;

    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  };

  const onLogin = async () => {
    try {
      await loginUser(email, password);
      setLoggedInUser();
      history.push("/account");
    } catch (err) {
      setHasError(true);
      console.log(err);
    }
  };

  const onSignup = async () => {
    try {
      await createUser(email, password);
      setLoggedInUser();
      history.push("/account");
    } catch (err) {
      setHasError(true);
      console.log(err);
    }
  };

  const buttonContainer = () => {
    if (mode === "login") {
      const disabled = !email || !password;

      return (
        <Fragment>
          <Button onClick={() => toggleMode()}>Signup</Button>
          <Button disabled={disabled} onClick={() => onLogin()} type="submit">
            Login
          </Button>
        </Fragment>
      );
    } else {
      const disabled =
        !email || !password || !confirmPassword || password !== confirmPassword;

      return (
        <Fragment>
          <Button onClick={() => toggleMode()}>Cancel</Button>
          <Button disabled={disabled} onClick={() => onSignup()} type="submit">
            Submit
          </Button>
        </Fragment>
      );
    }
  };

  return (
    <div>
      <Logo src={logo} className="App-logo" alt="logo" />
      <InputContainer>
        <LoginForm
          {...{ mode, handleUpdate, email, password, confirmPassword }}
        />
      </InputContainer>
      {buttonContainer()}
      <div>{`Join all ${userCount} Users!`}</div>
      {hasError && <ErrorText>Something went wrong</ErrorText>}
    </div>
  );
};

LoginScreen.propTypes = {
  history: object.isRequired,
  setLoggedInUser: func.isRequired
};

export default connect(
  null,
  { setLoggedInUser }
)(LoginScreen);

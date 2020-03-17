import React, { useState, useEffect } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import { get } from "lodash";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { updateUserData, fetchUserData } from "./../../actions/userActions";
import { ProfileForm } from "./components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const ProfileScreen = ({ history, userInfo, updateUserData }) => {
  const [mode, setMode] = useState("readOnly");
  const [userFormInfo, setUserFormInfo] = useState();

  useEffect(() => {
    const isNewUser = get(history, "location.state.isNewUser", null);

    if (isNewUser) {
      onToggleMode();
    }
  }, []);

  useEffect(() => {
    const { first, last } = get(userInfo, "name", {});
    setUserFormInfo({ first, last, ...userInfo });
  }, [userInfo]);

  const onToggleMode = () => {
    if (mode === "readOnly") {
      setMode("edit");
    } else {
      setMode("readOnly");
    }
  };

  const onUserUpdate = async () => {
    try {
      const { first, last, ...rest } = userFormInfo;
      const name = {
        name: {
          first,
          last
        }
      };
      await updateUserData({ ...rest, ...name });
      await fetchUserData();

      onToggleMode();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (field, e) => {
    const { value } = e.target;

    setUserFormInfo({ ...userFormInfo, [field]: value });
  };

  const buttonContainer = () => {
    if (mode === "readOnly") {
      return <Button onClick={() => onToggleMode()}>Edit</Button>;
    } else {
      return (
        <div>
          <Button onClick={() => onToggleMode()}>Cancel</Button>
          <Button onClick={() => onUserUpdate()}>Update</Button>
        </div>
      );
    }
  };

  return (
    <Container>
      <h1>Your Profile</h1>
      <ProfileForm {...{ mode, handleUpdate, userFormInfo }} />
      <ButtonContainer>{buttonContainer()}</ButtonContainer>
    </Container>
  );
};

ProfileScreen.propTypes = {
  history: object.isRequired,
  userInfo: object.isRequired,
  updateUserData: func.isRequired
};

export default connect(
  null,
  { updateUserData, fetchUserData }
)(ProfileScreen);

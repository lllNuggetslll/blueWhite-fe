import React from "react";
import { object } from "prop-types";
import { get } from "lodash";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const Container = styled.div``;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Balance = styled.div`
  background-color: lightgrey;
  width: 300px;
  margin-left: 20px;
  border-radius: 3px;
`;

const AccountScreen = ({ userInfo }) => {
  const balance = get(userInfo, "balance") || 0;

  const initials = () => {
    const { first, last } = get(userInfo, "name", { first: " ", last: " " });

    return first[0] + last[0] || "";
  };

  return (
    <Container>
      <h1>Your Account</h1>
      <AvatarContainer>
        <Avatar>{initials()}</Avatar>
      </AvatarContainer>
      <BalanceContainer>
        <h3>Balance:</h3>
        <Balance>${balance}</Balance>
      </BalanceContainer>
    </Container>
  );
};

AccountScreen.propTypes = {
  userInfo: object.isRequired
};

export default AccountScreen;

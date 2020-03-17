import React, { useState } from "react";
import { connect } from "react-redux";
import { object, func } from "prop-types";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styled from "styled-components";

import { updateUserData, fetchUserData } from "./../actions/userActions";

const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 290px;
`;

const TransferScreen = ({ userInfo, updateUserData }) => {
  const [mode, setMode] = useState("deposit");
  const [amount, setAmount] = useState("");

  const onEnterAmount = e => {
    const { value } = e.target;

    setAmount(value);
  };

  const onUpdateUser = async () => {
    const { balance } = userInfo;
    let newTotal;

    if (mode === "deposit") {
      newTotal = Number.parseInt(balance + amount);
    } else {
      newTotal = Number.parseInt(balance - amount);
    }

    if (newTotal < 0) newTotal = 0;
    try {
      await updateUserData({ balance: newTotal });
      setAmount("");
    } catch (err) {
      console.log(err);
    }
  };

  const onToggleMode = e => {
    setMode(e.target.value);
  };

  return (
    <div>
      <h1>Transfer Funds</h1>
      <RadioGroup
        aria-label="mode"
        name="gender1"
        value={mode}
        onChange={onToggleMode}
      >
        <FormControlLabel value="deposit" control={<Radio />} label="Deposit" />
        <FormControlLabel
          value="transfer"
          control={<Radio />}
          label="Transfer"
        />
      </RadioGroup>
      <InputContainer>
        <Input
          type="number"
          onChange={onEnterAmount}
          value={amount}
          placeholder="dollar amount"
        />
        <Button onClick={onUpdateUser}>
          {mode === "deposit" ? "Deposit" : "Transfer"}
        </Button>
      </InputContainer>
    </div>
  );
};

TransferScreen.propTypes = {
  userInfo: object.isRequired,
  updateUserData: func.isRequired
};

export default connect(
  null,
  { updateUserData, fetchUserData }
)(TransferScreen);

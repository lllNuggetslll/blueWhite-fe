import React, { Fragment } from "react";
import { string, func, object } from "prop-types";
import Input from "@material-ui/core/Input";
import styled from "styled-components";

const InputLabel = styled.div`
  display: flex;
`;

const Label = styled.div`
  margin-right: 20px;
  padding-top: 5px;
  width: 115px;
  text-align: initial;
`;

const ProfileForm = ({ handleUpdate, mode, userFormInfo }) => {
  const readOnly = mode === "readOnly";
  const {
    first,
    last,
    age,
    eyeColor,
    company,
    email,
    phone,
    address
  } = userFormInfo;

  return (
    <Fragment>
      <InputLabel>
        <Label>First Name:</Label>
        <Input
          type="text"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="first name"
          onChange={e => handleUpdate("first", e)}
          value={first}
        />
      </InputLabel>
      <InputLabel>
        <Label>Last Name:</Label>
        <Input
          type="text"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="last name"
          onChange={e => handleUpdate("last", e)}
          value={last}
        />
      </InputLabel>
      <InputLabel>
        <Label>Age:</Label>
        <Input
          type="number"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="age"
          onChange={e => handleUpdate("age", e)}
          value={age}
        />
      </InputLabel>
      <InputLabel>
        <Label>Email:</Label>
        <Input
          type="email"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="email"
          onChange={e => handleUpdate("email", e)}
          value={email}
        />
      </InputLabel>
      <InputLabel>
        <Label>Phone Number:</Label>
        <Input
          type="number"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="phone number"
          onChange={e => handleUpdate("phone", e)}
          value={phone}
        />
      </InputLabel>
      <InputLabel>
        <Label>Company:</Label>
        <Input
          type="text"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="company"
          onChange={e => handleUpdate("company", e)}
          value={company}
        />
      </InputLabel>
      <InputLabel>
        <Label>Address:</Label>
        <Input
          type="text"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="address"
          onChange={e => handleUpdate("address", e)}
          value={address}
        />
      </InputLabel>
      <InputLabel>
        <Label>Eye Color:</Label>
        <Input
          type="text"
          readOnly={readOnly}
          disableUnderline={readOnly}
          placeholder="eye color"
          onChange={e => handleUpdate("eyeColor", e)}
          value={eyeColor}
        />
      </InputLabel>
    </Fragment>
  );
};

ProfileForm.defaultProps = {
  userFormInfo: {
    first: "",
    last: "",
    age: "",
    eyeColor: "",
    company: "",
    email: "",
    phone: "",
    address: ""
  }
};

ProfileForm.propTypes = {
  handleUpdate: func.isRequired,
  mode: string.isRequired,
  userFormInfo: object.isRequired
};

export default ProfileForm;

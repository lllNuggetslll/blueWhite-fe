import React from "react";
import { string, func } from "prop-types";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const LoginForm = ({
  mode,
  handleUpdate,
  email,
  password,
  confirmPassword
}) => {
  return (
    <FormControl>
      <Input
        type="email"
        placeholder="email"
        onChange={e => handleUpdate("email", e)}
        value={email}
      />
      <Input
        type="password"
        placeholder="password"
        onChange={e => handleUpdate("password", e)}
        value={password}
      />
      {mode === "signup" && (
        <Input
          type="password"
          placeholder="confirm password"
          onChange={e => handleUpdate("confirmPassword", e)}
          value={confirmPassword}
        />
      )}
    </FormControl>
  );
};

LoginForm.propTypes = {
  mode: string,
  handleUpdate: func,
  email: string,
  password: string,
  confirmPassword: string
};

export default LoginForm;

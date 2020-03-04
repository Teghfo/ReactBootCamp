import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const FormMaterialUi = () => {
  const [state, setstate] = useState({ userName: "", userNameError: "" });

  const onChange = event => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  const validate = () => {
    let err = false;
    let errors = {};
    if (state.userName.length < 4) {
      err = true;
      errors.userNameError = "your username should have more than 4 charecter";
    } else {
      errors.userNameError = "";
    }

    if (err) {
      setstate({ ...state, userNameError: errors.userNameError });
    }
  };
  console.log(state.userNameError);

  return (
    <>
      <form style={{ margin: 20 }}>
        <TextField
          name="userName"
          value={state.userName}
          error={state.userNameError ? true : false}
          id={state.userNameError ? "filled-error" : "outlined-basic"}
          label={state.userNameError ? "Error" : "outlined-basic"}
          defaultValue="username"
          variant="outlined"
          onChange={event => onChange(event)}
        />
      </form>
    </>
  );
};

export default FormMaterialUi;

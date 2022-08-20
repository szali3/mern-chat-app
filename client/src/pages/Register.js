import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const userName = useRef();

  const registerSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      register
      <form onSubmit={registerSubmitHandler}>
        <TextField placeholder="user name" ref={userName} />
        <TextField placeholder="email" ref={email} />
        <TextField placeholder="password" ref={password} />
        <TextField placeholder="confirm password" ref={passwordAgain} />
        <Button type="submit"></Button>
      </form>
    </div>
  );
}

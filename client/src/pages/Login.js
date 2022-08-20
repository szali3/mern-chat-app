import { useRef } from "react";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const loginSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={loginSubmitHandler}>
        <TextField placeholder="email" ref={email} required />
        <TextField placeholder="password" ref={password} required />
        <Button className="loginButton" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

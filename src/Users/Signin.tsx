import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [signincredentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const [signupcredentials, setSignUpCredentials] = useState<User>({ _id: "",
  username: "", password: "", firstName: "", lastName: "", role: "USER"
});
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(signincredentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    await client.signup(signupcredentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div>
          <h1>Signin</h1>
          <input value={signincredentials.username} onChange={(e) => setCredentials({ ...signincredentials, username: e.target.value })} />
          <input value={signincredentials.password} onChange={(e) => setCredentials({ ...signincredentials, password: e.target.value })} />
          <button onClick={signin}> Signin </button>
      <br/>
      <h1>Signup</h1>
      <input value={signupcredentials.username} onChange={(e) => setSignUpCredentials({ ...signupcredentials, username: e.target.value })} />
      <input value={signupcredentials.password} onChange={(e) => setSignUpCredentials({ ...signupcredentials, password: e.target.value })} />
      <button onClick={signup}> Signup </button>
  </div>
  );
}

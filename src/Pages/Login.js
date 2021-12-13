import React, { useState } from "react";
// *custom buttom
import Button from "../UI/Button/Button";
// *custom input

import Input from "../UI/Input/Input";
// *sample data

import Data from "../Data";
import classes from "./Login.module.css";

const Login = ({ setIsLogin }) => {
  // console.log(Data);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  // const [user, setUser] = useState("");
  // * var to get filtered user
  let user = {};
  //* haddle action when form gets submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    //*Getting user based on entered username
    user = Data.filter((dta) => dta.username === username);

    //* checking if  user exist
    if (user.length) {
      //* as user Exist checking password
      if (user[0].password === password) {
        setIsLogin(true);
      } else {
        //* setting error if password doesnt match
        setError("password not match");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else {
      //* setting error if Email not found

      setError("no user Found with this Email");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className={classes.Login}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          type="email"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder={"email@domain.com"}
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={showPass ? "text" : "password"}
          placeholder={"password"}
        />

        <div className={classes.labels}>
          <label className={classes.box} htmlFor="show">
            {showPass && (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_325_560)">
                  <path
                    d="M44.3745 3.04422L20.5687 34.4301L6.49432 20.3658L0 26.8601L21.6444 48.5045L51.9546 9.53854L44.3745 3.04422Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_325_560">
                    <rect width="51.9546" height="51.9546" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </label>

          <label className={classes.label} htmlFor="show">
            Show Password?
          </label>
        </div>
        <input
          id="show"
          type="checkbox"
          value={showPass}
          onChange={() => {
            setShowPass(!showPass);
          }}
          hidden
        />
        <Button type="submit">Login</Button>
      </form>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Login;

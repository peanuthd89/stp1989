import React, { useState } from "react";
import { API_URL } from "../api";
import { useHistory } from "react-router-dom";
import { storeToken } from "../auth";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users";

const Login = ({setToken, setUserData}) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    if (response) {
      const data = await response.json();
      console.log("response", data)
      const token = data.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      setUserData({...data.data, username})
      history.push("/profile");
    }

    setUsername("");
    setPassword("");
    //history.push("/profile");
  };
  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Where is this?</button>
      </form>
    </div>
  );
};

export default Login;
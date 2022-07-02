//import { error } from "console";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../api";
//import { callApi } from "../api";
import { storeUser, storeToken } from "../auth";


const API_ROOT = `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users`;
const API_REGISTER = `${API_ROOT}register`;
const API_LOGIN = `${API_ROOT}login`;
const API_USER = `${API_ROOT}me`;

const AccountForm = ({ action, setToken, setUserData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = action === "login";
  const title = isLogin ? "Login" : "Register";
  const oppositeTitle = isLogin ? "Register" : "Login";
  const oppositeAction = isLogin ? "register" : "login";
  const actionURL = isLogin ? API_LOGIN : API_REGISTER;
  const history = useHistory();

  
    
  
  return (
    <div id="register-fields">
      <h4 className="page-title">{title}</h4>
      <form 
      
      onSubmit={async (event) =>{
        event.preventDefault() 
        try {
          
          const result = await registerUser(username, password)
        console.log(result)
          storeToken(result.token)
          storeUser(username)
          setUsername("")
          setPassword("")
          
        } catch (error) {
          console.log(error)
          
        }
      }}   >

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}


export default AccountForm;

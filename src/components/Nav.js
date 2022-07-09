import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = ({ token, setToken, setUserData }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token !== "") {
      setIsLoggedIn(true);
    } else if(token === ""){
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <div id="nav-bar">
      <div id="nav-links">
        <span>
          <Link to="/posts">View Posts from Strangers!</Link>
        </span>
        <div>
          {isLoggedIn ? (
            <div>
              <span>
                <Link to="/posts/new">Add a Post</Link>
              </span>
              <span>
                <Link to="/profile">Profile</Link>
              </span>
              <span>
                <Link
                  to="/"
                  onClick={() => {
                    setToken("");
                    setUserData({})
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </Link>
              </span>
            </div>
          ) : (
            <div>
              <div>
                <span>
                  <Link to="/login">Login</Link>
                </span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  
};

export default Nav;
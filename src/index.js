 //https://boisterous-meerkat-077d27.netlify.app/
 import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  AccountForm,
  Post,
  SinglePost,
  NewPostForm,
  Nav,
  Login,
  Profile,
} from "./components";
//import { callApi } from "./api";
import "../src/style.css";
const BASE_URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt"

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
 

useEffect(() => {
  const fetchPosts = async () => {
 try {
      const response = await fetch(`${BASE_URL}/posts`)
      const result = await response.json()
      const data = result.data.posts
      setPosts(data)
    } catch(error) {
    console.log(error)
  }
}
fetchPosts()
}, [])

  // const fetchUserData = async (token) => {
  //   const { data } = await callApi({
  //     url: "/users/me",
  //     token,
  //   });
  //   return data;
  // };

  // const fetchPosts = async () => {
  //   const {
  //     data: { posts },
  //   } = await callApi({
  //     url: "/posts",
  //   });
  //   return posts;
  // };

  // useEffect(() => {
  //   const postsget = async () =>{
  //      await fetchPosts();
  //   }
  //   const posts =  fetchPosts();
  //    setPosts(posts);
  //   if (!token) {
  //     setToken(localStorage.getItem("token"));
  //     return;
  //   }
  //   const data = fetchUserData(token);
  //   if (data && data.username) {
  //     setUserData(data);
  //   }
  // }, [token]);

  // useEffect( () => {
  //   const posts = fetchPosts();
  //   setPosts(posts);
  // }, []);

  return (
    <>
      <div id="header">
        {userData.username && (
          <p>Welcome back to Stranger's Things {userData.username}</p>
        )}
       
        {!userData.username && <p>Welcome to Stranger's Things</p>}
      </div>
      <Nav token={token} setToken={setToken} setUserdata={setUserData}/>

      <Switch>
        <Route exact path="/"></Route>

        <Route exact path="/posts">
          <Post
            posts={posts}
            token={token}
            setPosts={setPosts}
            userData={userData}
          />
        </Route>
        <Route path="/profile">
          <Profile userData={userData} token={token} />
        </Route>
        <Route path="/posts/new">
          <NewPostForm
            token={token}
            setPosts={setPosts}
            posts={posts}
            action="add"
          />
        </Route>
        <Route path="/posts/:postId/edit">
          <NewPostForm
            token={token}
            setPosts={setPosts}
            posts={posts}
            action="edit"
          />
        </Route>
        <Route path="/posts/:postId">
          <SinglePost posts={posts} token={token} />
        </Route>
 
          <Route path="/register">
              <AccountForm
                action="register"
                setToken={setToken}
                setUserData={setUserData} />
            </Route><Route path="/login">
                <Login
                  action="login"
                  setToken={setToken}
                  setUserData={setUserData} />
              </Route>
     
      </Switch>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);

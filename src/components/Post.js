import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
//import { SinglePost } from "./SinglePost"
import { BASE_URL, callApi } from "../api";

const Post= ({posts}) => {



return (
  <div className='posts'>

    <h1>All Posts</h1>
{
  //isLoggedIn ? <Button variant='contained' onClick={() =>
  }
{

  posts.map(post =>
  <div className="post__map" key={post._id}>
    <h1>{post.title}</h1>
    <h3>{post.description}</h3>
    <p>{post.price}</p>
    {/* <Button variant='outlined'>Send Message</Button> */}
  </div>
)
}
</div>
)
}
export default Post;
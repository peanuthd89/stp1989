import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
//import { SinglePost } from "./SinglePost"
import { BASE_URL, callApi } from "../api";

const Post= ({isLoggedIn}) => {
  const BASE_URL = "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt"
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState([])
  const history = useHistory()

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
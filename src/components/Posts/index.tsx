import React from "react";
import useFetch from "../../hooks/useFetch";
import Post from "./Post";
import { FetchData } from "../../interfaces/fetchResult";

const Posts = () => {
  const posts: FetchData[] = useFetch("https://simple-blog-api.crew.red/posts");
  return (
    <>
      {posts && posts.map((props) => <Post key={props.id} {...props}></Post>)}
    </>
  );
};

export default Posts;

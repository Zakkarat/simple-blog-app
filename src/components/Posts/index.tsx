import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Post from "./Post";
import { FetchData } from "../../interfaces/fetchResult";
import { connect } from "react-redux";
import { getPosts } from "../../Redux/actions";
import { AnyAction } from "redux";

const Posts = ({ getPosts }: AnyAction) => {
  const posts: FetchData[] = useFetch("https://simple-blog-api.crew.red/posts");
  useEffect(() => {
    if (posts) {
      getPosts(posts);
    }
  });
  return (
    <>
      {posts && posts.map((props) => <Post key={props.id} {...props}></Post>)}
    </>
  );
};

const mapDispatchToProps = {
  getPosts,
};

export default connect(null, mapDispatchToProps)(Posts);

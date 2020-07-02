import React from "react";
import { Props } from "../../interfaces/post";
import useFetch from "../../hooks/useFetch";
import { FetchData } from "../../interfaces/fetchResult";
import { MDBCardBody, MDBCardText, MDBCol } from "mdbreact";
import Comments from "./Comments";

const Post: React.FC<Props> = ({ postId }) => {
  const url = `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`;
  const post: FetchData = useFetch(url);
  return (
    <MDBCol sm="12" className="mt-3">
      {post && (
        <>
          <MDBCardBody>
            <h2 className="text-center">{post.title}</h2>
            <hr></hr>
            <MDBCardText>{post.body}</MDBCardText>
          </MDBCardBody>
          <Comments comments={post.comments ? post.comments : []}></Comments>
        </>
      )}
    </MDBCol>
  );
};

export default Post;

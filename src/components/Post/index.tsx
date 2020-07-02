import React from "react";
import { Props } from "../../interfaces/post";
import useFetch from "../../hooks/useFetch";
import { FetchData } from "../../interfaces/fetchResult";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Post: React.FC<Props> = ({ postId }) => {
  const url = `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`;
  const post: FetchData = useFetch(url);
  return (
    <MDBCol sm="12" className="mt-3">
      {post && (
        <MDBCardBody>
          <MDBCardTitle>{post.title}</MDBCardTitle>
          <hr></hr>
          <MDBCardText>{post.body}</MDBCardText>
        </MDBCardBody>
      )}
    </MDBCol>
  );
};

export default Post;

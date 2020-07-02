import React from "react";
import Layout from "../../src/components/Layout";
import { MDBContainer } from "mdbreact";
import PostForm from "../../src/components/PostForm";

const NewPost = () => {
  return (
    <Layout>
      <MDBContainer className="d-flex justify-content-center">
        <PostForm></PostForm>
      </MDBContainer>
    </Layout>
  );
};

export default NewPost;

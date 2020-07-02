import React, { useState, useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import Post from "../../src/components/Post/";
import Layout from "../../src/components/Layout";
import { MDBContainer } from "mdbreact";

const PostDetailed = () => {
  const router = useRouter();
  const [postId, setPostId] = useState<any>();
  useEffect(() => {
    if (router.asPath !== router.route) {
      setPostId(router.query.postId);
    }
  }, [router]);
  return (
    <Layout>
      <MDBContainer className="d-flex justify-content-center">
        <Post postId={postId}></Post>
      </MDBContainer>
    </Layout>
  );
};

export default PostDetailed;

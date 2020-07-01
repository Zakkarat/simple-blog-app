import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import useFetch from "../../hooks/useFetch";
import { AxResponse } from "../../interfaces/Response";

const Posts = () => {
  const posts: AxResponse = useFetch("https://simple-blog-api.crew.red/posts");
  console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((props: Object) => (
          <MDBCol sm="12">
            <MDBCard wide>
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </div>
  );
};

export default Posts;

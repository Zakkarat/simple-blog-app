import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import { FetchData } from "../../interfaces/fetchResult";

const Post: React.FC<FetchData> = ({ title, body, id }) => {
  return (
    <MDBCol sm="12" className="mt-3">
      <MDBCard wide>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{body}</MDBCardText>
          <MDBBtn color="dark" href={`/posts/${id}`}>
            View Comments
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Post;

import React from "react";
import { Props } from "../../interfaces/comments";
import { MDBCardBody, MDBCard } from "mdbreact";
const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((elem) => (
        <MDBCard className="mt-3">
          <MDBCardBody>{elem.body}</MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
};

export default Comments;

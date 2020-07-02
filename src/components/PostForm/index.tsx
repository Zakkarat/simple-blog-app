import React from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { MDBCol } from "mdbreact";
import axios from "axios";
import { connect } from "react-redux";
import { createPost } from "../../Redux/actions";
import { AnyAction } from "redux";

const PostForm = ({ createPost }: AnyAction) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    await axios
      .post("https://simple-blog-api.crew.red/posts", {
        ...data,
      })
      .then((response) => {
        createPost(response.data);
        if (response.status === 201) {
          router.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <MDBCol md="5">
      <form
        className="border border-light mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {" "}
        <p className="h4 mb-4 text-center">Create new Post</p>
        <label>Title</label>
        <input
          type="text"
          id="textInput"
          className="form-control mb-4"
          name="title"
          ref={register({ required: true })}
        />
        <label>Body</label>
        <textarea
          id="textarea"
          className="form-control mb-4"
          name="body"
          ref={register({ required: true })}
        ></textarea>
        <button className="btn btn-black text-white btn-block" type="submit">
          Send
        </button>
      </form>
    </MDBCol>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);

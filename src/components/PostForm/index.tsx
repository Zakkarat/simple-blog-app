import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { MDBCol } from "mdbreact";
import { SubmitPost } from "../../interfaces/post";
import axios from "axios";

const PostForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: SubmitPost) => {
    await axios
      .post("https://simple-blog-api.crew.red/posts", {
        ...data,
      })
      .then((response) => {
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
          placeholder="Text input"
          name="title"
          ref={register({ required: true })}
        />
        <label>Body</label>
        <textarea
          id="textarea"
          className="form-control mb-4"
          placeholder="Textarea"
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

export default PostForm;

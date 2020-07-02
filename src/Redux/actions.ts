import { actionFunc } from "../interfaces/redux";

export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE POST";

export const getPosts : actionFunc = (posts) => {
    type: GET_POSTS
    payload: {posts}
}

export const createPost : actionFunc = (post) => {
    type: GET_POSTS
    payload: {post}
}
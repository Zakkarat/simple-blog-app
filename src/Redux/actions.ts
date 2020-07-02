import { FetchData } from "../interfaces/fetchResult";

export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE POST";

export const getPosts = (posts : FetchData[]) => ({
    type: GET_POSTS,
    payload: {posts}
})

export const createPost = (post : FetchData) => ({
    type: CREATE_POST,
    payload: {post}
})
import { GET_POSTS, CREATE_POST } from "./actions"
import {createStore, AnyAction, applyMiddleware} from 'redux';
import {MakeStore, createWrapper} from 'next-redux-wrapper';
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk"
 
const posts = (state : any = [], action : AnyAction) => {
    switch(action.type) {
        case GET_POSTS:
            return [...action.payload.posts]
        case CREATE_POST:
            return [...state, action.payload.post]
        default: 
        [...state]
    }
}

const makeStore: MakeStore = () => createStore(posts, devToolsEnhancer({}) || applyMiddleware(thunk));

export default createWrapper(makeStore, {debug: true});

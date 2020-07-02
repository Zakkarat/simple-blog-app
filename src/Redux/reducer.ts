import { GET_POSTS, CREATE_POST } from "./actions"
import {createStore, AnyAction} from 'redux';
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper';
import { devToolsEnhancer } from "redux-devtools-extension";

const posts = (state : any = [], action : AnyAction) => {
    switch(action.type) {
        case GET_POSTS:
            return [action.payload]
        case CREATE_POST:
            return [...state, action.payload]
        default: 
        [...state]
    }
}

const makeStore: MakeStore = () => createStore(posts, devToolsEnhancer({}));

export default createWrapper(makeStore, {debug: true});

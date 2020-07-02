import { GET_POSTS, CREATE_POST } from "./actions"
import { actionResult } from "../interfaces/redux"
import { combineReducers} from 'redux'

const posts = (state = [], action : actionResult) => {
    switch(action.type) {
        case GET_POSTS:
            return [action.payload]
        case CREATE_POST:
            return [...state, action.payload]
        default: 
            [...state]
    }
}

export default combineReducers(posts)
import { combineReducers } from 'redux'

// import contentful from '../contentful'
import postsReducer from "./dataReducer";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // contentful: contentful,
    // primaryReducer: primaryReducer,
    postsReducer: postsReducer
})
//primaryreducer is placeholder
export default rootReducer

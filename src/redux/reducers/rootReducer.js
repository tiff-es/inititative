import { combineReducers } from 'redux'

// import contentful from '../contentful'
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    // contentful: contentful,
    // primaryReducer: primaryReducer,
    dataReducer: dataReducer
})
export default rootReducer

// Contentful reducer is an alternative method of fetching from contentful using reselect
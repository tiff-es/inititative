import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import { reducer as contentful } from './contentful';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    contentful,
    dataReducer: dataReducer,
    routing: connectRouter(history)
})
export default rootReducer

// Contentful reducer is an alternative method of fetching from contentful using reselect
import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import { reducer as contentful } from './contentful';

const rootReducer = combineReducers({
    contentful,
    dataReducer: dataReducer
})
export default rootReducer

// Contentful reducer is an alternative method of fetching from contentful using reselect
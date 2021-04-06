import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
// import { middleware as contentful } from './contentful';
import promise from 'redux-promise';

const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware(promise)
    // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store

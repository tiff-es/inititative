import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import promise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';
import { middleware as contentful } from '../redux/reducers/contentful';

import thunk from 'redux-thunk'


const enhancers = []
const middleware = [
    thunk,
    contentful,
    promise]
const composedEnhancers = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware(...middleware),
    ...enhancers
// other store enhancers if any
)

export const configureStore = createStore(
 rootReducer,composedEnhancers)


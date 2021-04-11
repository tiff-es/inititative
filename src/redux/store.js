import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import promise from 'redux-promise';
import { applyMiddleware, createStore} from 'redux';
import { middleware as contentful } from '../redux/reducers/contentful';

import thunk from 'redux-thunk'
import { createBrowserHistory } from "history";
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const enhancers = []
const middleware = [
    thunk,
    contentful,
    promise,
routerMiddleware(history)]
const composedEnhancers = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware(...middleware),
    ...enhancers
// other store enhancers if any
)

export default function configureStore(preloadedState) {
    const store = createStore(
 rootReducer(history),preloadedState, composedEnhancers)
    return store
}


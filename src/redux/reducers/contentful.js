import  {createClient} from 'contentful';
import contentfulRedux from 'contentful-redux';

import {API_TOKEN, API_SPACE_ID} from '../actions/actionTypes'

export const {  actions, reducer, middleware, selectors} = contentfulRedux({
    createClient,
    space: API_SPACE_ID,
    accessToken: API_TOKEN,
    stateSelector: (state => state.contentful)
});
// ALTERNATIVE METHOD TO FETCH FROM CONTENTFUL USING RESELECT
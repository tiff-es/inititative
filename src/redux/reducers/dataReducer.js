import { CONTENTFUL_FETCH, SET_ENTRIES } from '../actions/actionTypes';
const INITIAL_STATE = { all: [],
    status: 'Initial state, yet to fetch from CMS'
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case CONTENTFUL_FETCH:
            return { ...state, harmReductionQuery: action.payload, status: 'Contentful fetch dispatched' }
        case SET_ENTRIES:
            return {...state, fetchedEntries: action.payload}
        default:
            return state;
    }
}
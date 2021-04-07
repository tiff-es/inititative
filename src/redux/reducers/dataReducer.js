import { CONTENTFUL_FETCH } from '../actions/actionTypes';
const INITIAL_STATE = { all: [],
    status: 'Initial state, yet to fetch from CMS'
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case CONTENTFUL_FETCH:
            return { ...state, all: action.payload.data, status: 'Contentful fetch dispatched' };
        default:
            return state;
    }
}
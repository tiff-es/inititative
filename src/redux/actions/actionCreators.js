import axios from 'axios';
import {CONTENTFUL_FETCH, API_BASE_URL, API_SPACE_ID, API_TOKEN} from './actionTypes'

export function fetchPosts() {
    const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
    return {
        type: CONTENTFUL_FETCH,
        payload: request
    };
}

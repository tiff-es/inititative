import axios from 'axios';
import {CONTENTFUL_FETCH, SET_ENTRIES, API_BASE_URL, API_SPACE_ID, API_TOKEN, CONTENT_TYPE_ID} from './actionTypes'
import { useSelector } from "react-redux";

export function contentfulFetch() {
    const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/content_types/${CONTENT_TYPE_ID}?access_token=${API_TOKEN}`)
    return {
        type: CONTENTFUL_FETCH,
        payload: request
    }
}


// export const SetEntries = (entries) => {
//     return {
//         type: SET_ENTRIES,
//         payload: useSelector(getEntries(entries))}
// }

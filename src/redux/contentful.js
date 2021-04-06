import { createClient } from 'src/redux/contentful';
import contentfulRedux from 'contentfulRedux';

export const { actions, reducer, middleware, selectors } = contentfulRedux({
    createClient,
    space: 'YOUR_SPACE_ID',
    accessToken: 'YOUR_ACCESS_TOKEN',
    stateSelector: state => state.contentful
});

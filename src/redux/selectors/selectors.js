import { createSelector } from 'reselect';
import { selectors } from '../reducers/contentful';

export const myModelEntities = createSelector(
    selectors.entries, selectors.contentTypes,
    (entries, contentTypes) => entries.filter(each => each.__contentType__ === contentTypes.myModel)
);
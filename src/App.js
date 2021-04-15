
import React, {  useState } from "react";
import './App.css';

import { connect, useDispatch } from "react-redux";
import { contentfulFetch } from "./redux/actions/actionCreators";
import PropTypes from 'prop-types'
import { actions, selectors } from './redux/reducers/contentful';
import { ConnectedRouter} from 'connected-react-router'
import routes from "./routes";
import { initialState } from "contentful-redux/distribution/reducer";

const App = ({history, context})   =>
{

    const dispatch = useDispatch()

  dispatch(actions.sync())
    dispatch(contentfulFetch())


    return (

        <ConnectedRouter history={history} context={context}>
            {routes}

        </ConnectedRouter>
    );
}
// const mapStateToProps = (state) => ({
//     getEntries: state.getEntriesByType.id
// })





App.propTypes = {
    history: PropTypes.object
}
export default App
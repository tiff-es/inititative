
import React, { useEffect } from "react";
import './App.css';

import { connect, useDispatch } from "react-redux";
import { contentfulFetch } from "./redux/actions/actionCreators";
import PropTypes from 'prop-types'
import { actions } from './redux/reducers/contentful';
import { ConnectedRouter} from 'connected-react-router'
import routes from "./routes";

const App = ({history, context})   =>
{ const dispatch = useDispatch()
dispatch(contentfulFetch())
    dispatch(actions.sync());
    return (
        <ConnectedRouter history={history} context={context}>
            {routes}
        </ConnectedRouter>

    );
}

//
//
//
//     const mapDispatchToProps = dispatch => {
//         return {
//             fetchPosts: (posts) => dispatch(changeMonth(monthId)),
//             changeFromDate: (date) => dispatch(changeFromDate(date)),
//             changeToDate: (date) => dispatch(changeToDate(date)),
//             changeRadio: (val) => dispatch(changeRadioDatepicker(val)),
//         }
//     };
// }
App.propTypes = {
    history: PropTypes.object
}

export default App
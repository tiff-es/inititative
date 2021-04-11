import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { contentfulFetch } from "./redux/actions/actionCreators";
import { Link } from 'react-router-dom'
import { actions } from './redux/reducers/contentful';
import { ConnectedRouter} from 'connected-react-router'
import { Switch, Route} from 'react-router'

const App = ({history, context})   =>
{ const dispatch = useDispatch()
dispatch(contentfulFetch())
    dispatch(actions.sync());
    return (
        <ConnectedRouter history={history} context={context}>
            <>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/about-us'} component={About}/>
            </Switch>
            </>
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


export default connect(null)(App)

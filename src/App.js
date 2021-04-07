import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { contentfulFetch } from "./redux/actions/actionCreators";
import { Route, Link } from 'react-router-dom'
import { actions } from './redux/reducers/contentful';
export function App() {
    const dispatch = useDispatch()
dispatch(contentfulFetch())
    dispatch(actions.sync());


    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
            </header>
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={About} />
            </main>
        </div>
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

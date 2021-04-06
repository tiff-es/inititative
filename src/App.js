import logo from './logo.svg';
import './App.css';
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contentfulFetch } from "./redux/actions/actionCreators";

export function App() {
    const dispatch = useDispatch()
dispatch(contentfulFetch())


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
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

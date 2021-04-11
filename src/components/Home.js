import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect, useDispatch } from 'react-redux'
import SplashPage from "./SplashPage";
const Home = (props) => {
 const dispatch = useDispatch()
    return(
    <div>
        <h1>Home Page</h1>
        <p>Welcome home!</p>
        <SplashPage/>
    </div>
    )
}

export default connect(
    null, {push}
)(Home)
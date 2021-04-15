import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import SplashPage from "./SplashPage";
import { Link } from "react-router-dom";
const Home = () => {
 const dispatch = useDispatch()
    const about = () => {dispatch(push('/about-us'))}
    return(
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <SplashPage/>
        {/*<Link to={'/about-us'}>Go to about page via redux</Link>*/}
    </div>
    )
}

// export default connect(
//     null, {push}
// )(Home)

export default Home
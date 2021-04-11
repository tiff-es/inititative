import React from "react";
import { connect } from "react-redux";
import { push } from 'connected-react-router'
 class SplashPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){

        return(
            <div className='splashPage-container-div'>

               <h2 className='splashPage-h2'>Insert splash Page h2</h2>
                <div className='splashPage-details-container'>
                    <p className='splashPage-details-p'>
                        Text here desc site
                    </p>
                </div>

            </div>
        )
    }
}

export default connect(null, {push})(SplashPage)
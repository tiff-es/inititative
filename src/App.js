
import React, { useContext, useEffect, useState } from "react";
import './App.css';

import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { contentfulFetch, SetEntries } from "./redux/actions/actionCreators";
import PropTypes from 'prop-types'
import { actions, selectors } from './redux/reducers/contentful';
import { ConnectedRouter} from 'connected-react-router'
import routes from "./routes";
import { getEntries } from "./redux/selectors/selectors";
import { initialState } from "contentful-redux/distribution/reducer";
import { createSelector } from "reselect";
import store from "./redux/store";
import * as contentful from "contentful";
class App extends React.Component {
    componentWillMount() {
        this.props.sync()
        this.props.contentfulFetch()

    }

    componentDidMount(){
    }

    render() {
        let {history, context} = this.props;




        return (

            <ConnectedRouter harmReductionData={this.props.harmReductionData}  harmReductionQuery={this.props.harmReductionQuery} contentfulState={this.props.contentfulState}  history={history} context={context}>
                {routes(this.props)}

            </ConnectedRouter>
        );
    }
}

export const mapStateToProps = (state, ownProps) => ({
    harmReductionQuery: state.dataReducer.harmReductionQuery,
    harmReductionData: state.contentful.contentTypes[0],
    contentfulState: state.contentful,
    ...ownProps
})


const mapDispatchToProps = dispatch => ({
   sync: () => dispatch(actions.sync()),
    contentfulFetch: () => dispatch(contentfulFetch()),
    selectContentTypes: () => dispatch(selectors.contentTypes())


});

export default connect(mapStateToProps, mapDispatchToProps, null)(App)
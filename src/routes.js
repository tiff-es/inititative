import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

const routes = (props) => {

    return(
    <>
        <NavBar/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about-us'} component={About}/>
        </Switch>
    </>
    )
}

export default routes
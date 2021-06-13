import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const App = () => {
    return (
        <Switch>
            <Route path="/bingus">
                <>
                    <div>YO BINGUS</div>
                    <Link to={"/"}>HOME</Link>
                </>
            </Route>
            <Route path="/">
                <>
                    <div>home</div>
                    <Link to={"/bingus"}>go to bingus</Link>
                </>
            </Route>
        </Switch>
    )
}
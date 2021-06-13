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
            <Route path="/">
                <>
                    <div></div>
                    <h2>Welcome to dothq.co</h2>
                    <Link to={"https://dothq.co/"}>go to dothq.co</Link>
                    <p>Welcome!</p>
                </>
            </Route>
        </Switch>
    )
}
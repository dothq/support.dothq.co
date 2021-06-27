import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import { Reset } from "styled-reset";
import { Home } from "../../pages/Home.page";
import { GlobalStyle } from "../../styles/global";
import { Article } from "../../pages/Article.page";

export const App = ({ lang }: { lang: string }) => {
    return (
        <>
            <Reset />
            <GlobalStyle />

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/:product" render={(props) => <Article {...props} /> } exact />
                <Route>
                    <>
                        404
                    </>
                </Route>
            </Switch>
        </>
    )
}
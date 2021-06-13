import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import { Reset } from "styled-reset";
import { Home } from "../../pages/Home.page";
import { GlobalStyle } from "../../styles/global";

export const App = ({ lang }: { lang: string }) => {
    return (
        <>
            <Reset />
            <GlobalStyle />
            
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path={"*"}>
                    <>
                        404
                    </>
                </Route>
            </Switch>
        </>
    )
}
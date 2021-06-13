import React from "react";
import { Header } from "../Header";
import { Searchbox } from "../Searchbox";
import { StyledMainHero } from "./style";

export const MainHero = () => {
    return (
        <StyledMainHero>
            <Header style={{ color: "white" }} />

            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                flex: 1, 
                alignItems: "center", 
                color: "white", 
                padding: "0 1.5rem",
                paddingTop: "3.5rem",
                textAlign: "center"
            }}>
                <h1 style={{ marginBottom: "5rem" }}>
                    @WELCOME_LANDING_MASTHEAD@
                </h1>

                <Searchbox />
            </div>
        </StyledMainHero>
    )
}
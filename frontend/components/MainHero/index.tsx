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
                paddingTop: "3.5rem" 
            }}>
                <h1 style={{ marginBottom: "5rem" }}>Welcome to Dot HQ Support</h1>

                <Searchbox />
            </div>
        </StyledMainHero>
    )
}
import React from "react"
import styled from "styled-components";
const Wrapper = styled.section`
text-align: center;
font-family: Helvetica;
background-color: black;
color: white;
font-size: 1rem;
padding: 15px;
`;

export const Footer = () => {
    return (
                    <Wrapper>
                    <span>
                    © 2021 Dot HQ. All rights reserved.
                    </span>
                    </Wrapper>
    )
}
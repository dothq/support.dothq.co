import styled from "styled-components";

export const StyledMainHero = styled.section`
    width: 100%;
    height: 500px;

    background: 
        url(/assets/noise.png) repeat, 
        url(/assets/rainbow.png),
        linear-gradient(90deg, rgba(225,62,205,1) 0%, rgba(250,90,110,1) 51%, rgba(227,108,88,1) 100%);
    background-size: cover, cover, cover;
    display: flex;
    flex-direction: column;
`;
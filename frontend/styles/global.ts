import { createGlobalStyle } from "styled-components";

const Fonts = `
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: block;
        src: url(/assets/Inter.var.woff2) format('woff2');
        font-named-instance: 'Regular';
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${Fonts};

    html, body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
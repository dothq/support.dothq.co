import styled from "styled-components";

export const StyledSearchbox = styled.button`
    max-width: 764px;
    width: 100%;
    background: 
        url(/assets/noise.png) repeat, 
        linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), 
        rgba(22, 98, 211, 0.1);
    border-radius: 12px;
    max-height: 72px;
    display: flex;
    height: 100%;
    color: white;
    border: none;
    outline: none;
    appearance: none;
    cursor: text;

    transition: 0.15s all cubic-bezier(.46,.03,.52,.96);

    &:focus-within {
        background: white;
        color: black;
        box-shadow: 0px 0px 0px 4px 0px #1662D3;
        transform: scale(1.05);
    }

    & > i {
        width: 20px;
        height: 20px;
        padding: 26px;
        padding-left: 32px;
        mask-image: url(/assets/search.svg);
        mask-size: 20px;
        mask-repeat: no-repeat;
        mask-position: center;
        background-color: currentColor;
        position: absolute;
        pointer-events: none;
    }
`;

export const SearchboxInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    height: 100%;
    color: inherit;
    padding-left: 78px;
`;
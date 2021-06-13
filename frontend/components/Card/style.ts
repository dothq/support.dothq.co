import styled, { css } from "styled-components";

export const StyledCard = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;

    transition: 0.2s all;

    & > * {
        text-decoration: none;
        color: inherit;
    }

    &:hover, &:focus, &:active {
        box-shadow: inset 0px 0px 0px 3px currentColor, 0px 0px 4px -2px rgba(0, 0, 0, 0.25), 0px 2px 8px 2px rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
        cursor: pointer;
        
        & > h3 {
            border-bottom: 2px solid currentColor;
        }
    }

    ${({ background, w, h }: { background?: any; w?: number, h?: number }) => css`
        background: ${background || "white"};
        width: ${w}px;
        height: ${h}px;
    `}
`;
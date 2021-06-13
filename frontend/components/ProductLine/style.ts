import styled, { css } from "styled-components";

export const StyledProductLine = styled.section`
    width: 100%;

    background: 
        radial-gradient(22.8% 46.52% at 52.94% 53.48%, #ECF1F8 0%, rgba(165, 201, 255, 0) 0.01%, #ECF1F8 100%);
    color: #1662D3;
`;

export const PLContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 4rem 0rem;
    max-width: calc(1700px + 2rem * 2);

    & > div {
        display: flex;
        margin-top: 52px;
        gap: 20px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 0rem 2rem;
    }
`;

export const ProductCardIcon = styled.i`
    width: 52px;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.25), 0px 2px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin-bottom: 24px;
    margin-top: 28px;

    ${({ icon }: { icon: any }) => css`
        &:before {
            content: "";
            position: absolute;
            width: 52px;
            height: 52px;
            mask-image: url(${icon});
            mask-size: 24px;
            mask-repeat: no-repeat;
            mask-position: center;
            background-color: currentColor;
        }
    `}
`;
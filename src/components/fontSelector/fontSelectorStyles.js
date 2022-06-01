import styled from 'styled-components';

export const FontSelectContainer = styled.div`
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    color: #202930;
    margin-top: 125px;
`;

export const FontSelectorContent = styled.div`
    background: #feffff;
    padding-bottom: 75px;
    margin: 0 auto;
`;

export const BuyFontContainer = styled.div`
    padding: 0 35px;
`;

export const BuyFontText = styled.div`
    font-size: 1.25rem;
    hyphens: auto;
`;

export const TabsContainer = styled.div`
    display: flex;
    width: 1175px;
    margin: 0 auto;
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
        width: 575px;
        max-width: 100vw;
        display: block;
    }

    @media only screen and (max-width: 600px) {
        width: 300px;
        max-width: 100vw;
        display: block;
    }
`;

export const TabsTitle = styled.h1`
    margin-left: 25px;
    flex-grow: 7;
    text-align: left;
    font-size: 3.24rem;
    font-weight: 600;

    @media only screen and (max-width: 1200px) {
        margin-left: 10px;
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        margin-left: 0;
        font-size: 1.5rem;
    }
`;
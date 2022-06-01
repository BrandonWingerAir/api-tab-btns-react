import styled, { css } from 'styled-components';

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: center;
    margin-right: 10px;

    @media only screen and (max-width: 1200px) {
        margin-right: 0;
    }
`;

export const StyledTab = styled.button`
    color: #fc540c;
    width: 100%;
    padding: 20px 0;
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 1.29rem;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: transparent;
    border: none;
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) =>
        p.active && 
        css
            `color: #becadf;`
    }
    ${(p) => !p.active && p.inactiveStyle}

    @media only screen and (max-width: 1200px) {
        font-size: 1.15rem;
        margin-top: 0;
    }
`;

export const StyledTabPanel = styled.div`
    display: ${(p) => (p.active ? 'flex' : 'none')};
    box-sizing: border-box;
    background: #feffff;
    flex-direction: column;
    width: 1165px;
    margin: 0 auto;
    justify-content: center;
    border : 4px solid #becadf;
    border-radius: 15px;

    @media only screen and (max-width: 1200px) {
        width: 575px;
        padding: 0 0 10px 0;
    }

    @media only screen and (max-width: 600px) {
        width: 315px; 
        margin-bottom: 25px;
        padding: 5px 5px 10px 10px;
    }
`;

export const TabsNav = styled.div`
    display: flex;
`;
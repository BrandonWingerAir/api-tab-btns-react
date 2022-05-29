import styled, { css } from 'styled-components';

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: center;
    margin-right: 10px;

    @media only screen and (max-width: 900px) {
        margin-right: 0;
    }
`;

export const StyledTab = styled.button`
    color: #fc540c;
    width: 100%;
    padding: 20px 0;
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
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

    @media only screen and (max-width: 900px) {
        font-size: 1.15rem;
    }
`;

export const StyledTabPanel = styled.div`
    display: ${(p) => (p.active ? 'flex' : 'none')};
    box-sizing: border-box;
    padding: 10px 0;
    background: #feffff;
    flex-direction: column;
    width: 1175px;
    margin: 0 auto;
    justify-content: center;
    border : 4px solid #becadf;
    border-radius: 15px;

    @media only screen and (max-width: 900px) {
        width: 575px; 
    }

    @media only screen and (max-width: 600px) {
        width: 335px; 
        margin-bottom: 25px;
        padding: 20px 5px 10px 15px;
    }
`;

export const TabsNav = styled.div`
    display: flex;
`;
import styled, { css } from 'styled-components';
import { deviceWidth } from '../responsiveStyle';

export const TabsNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;

    @media ${deviceWidth.mediumMax} {
        margin-right: 0;
    }
`;

export const TabLabel = styled.button`
    color: #fc540c;
    width: 100%;
    text-transform: uppercase;
    text-align: right;
    font-size: 1.29rem;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${(p) => p.active && css `
        color: #becadf;
        cursor: default;
    `};

    @media ${deviceWidth.mediumMax} {
        font-size: 1.15rem;
        margin-top: 0;

        &:first-child {
            text-align: left;
            margin-left: 20px;
        }

        &:last-child {
            text-align: right;
            margin-right: 20px;
        }
    }

    @media ${deviceWidth.smallMax} {
        &:first-child {
            margin-left: 15px;
        }

        &:last-child {
            text-align: right;
            margin-right: 15px;
        }
    }
`;

export const TabContent = styled.div`
    display: ${(p) => (p.active ? 'flex' : 'none')};
    box-sizing: border-box;
    background: #feffff;
    flex-direction: column;
    width: 1175px;
    margin: 0 auto;
    padding: 90px 75px 20px 75px;
    justify-content: center;
    border : 4px solid #becadf;
    border-radius: 15px;

    @media ${deviceWidth.mediumMax} {
        width: 575px;
    }

    @media ${deviceWidth.smallMax} {
        width: 315px; 
        margin-bottom: 25px;
    }
`;

export const TabsNav = styled.div`
    display: flex;
`;
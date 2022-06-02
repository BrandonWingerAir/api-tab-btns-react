import styled from 'styled-components';
import { deviceWidth } from './responsiveStyle';

export const FontSelectContainer = styled.div`
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    color: #202930;
    background: #feffff;
    margin: 0 auto;
`;
    
export const TabsLoading = styled.div`
    margin-top: 22%;
    text-align: center;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
    
export const TabContentLoading = styled.div`
    height: 315px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
`;

export const TabsHeader = styled.div`
    display: flex;
    width: 1175px;
    box-sizing: border-box;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-end;
    padding: 40px 25px;

    @media ${deviceWidth.mediumMax} {
        width: 575px;
        display: block;
        padding: 35px 25px;
    }

    @media ${deviceWidth.smallMax} {
        width: 300px;
        max-width: 100vw;
        display: block;
    }
`;

export const TabsTitle = styled.h1`
    margin-left: 25px;
    margin: 0;
    flex-grow: 7;
    text-align: left;
    font-size: 3.24rem;
    font-weight: 600;

    @media ${deviceWidth.mediumMax} {
        margin-left: 5px;
        margin-bottom: 25px;
        font-size: 2rem;
    }

    @media ${deviceWidth.smallMax} {
        margin-left: 0;
        font-size: 1.5rem;
    }
`;

export const BuyFontContainer = styled.div`
    padding: 0 35px;

    @media ${deviceWidth.mediumMax} {
        padding: 0 10px;
    }
`;

export const BuyFontText = styled.div`
    font-size: 1.4rem;
    hyphens: auto;
    padding-bottom: 70px;
    
    @media ${deviceWidth.mediumMax} {
        font-size: 1.1rem;
        padding-bottom: 25px;
    }
`;
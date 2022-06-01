import styled from 'styled-components';

export const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    border-radius: 10px;

    @media only screen and (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
            width: 575px;
    }

    @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            width: 315px;
            padding: 10px 5px;
    }
`;

export const BtnIcon = styled.div`
    border : 2px solid #000001;
    border-radius: 25px;
    padding: 6px;
    width: 140px;
    height: 140px;

    @media only screen and (max-width: 1200px) {
        margin-left: 10px;
        width: 70px;
        height: 70px;
    }

    @media only screen and (max-width: 600px) {
        margin-left: 0;
        width: 55px;
        height: 55px;
    }
`;

export const BtnIconBg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    background-color: ${props => props.btnColor};
`;

export const BtnIconAbbr = styled.span`
    color: #fff;
    opacity: 30%;
    font-size: 2.4rem;
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    left: 12.5%;

    @media only screen and (max-width: 1200px) {
        font-size: 1.4rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.25rem;
    }
`;

export const FontBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    cursor: pointer;
    color: #202930;
    font-size: 1.9rem;

    &:first-of-type {
        grid-row: span 2;
        
        ${BtnIcon} {
            width: 200px;
            height: 200px;
        }

        ${BtnIconAbbr} {
            font-size: 4rem;
        }
    }

    opacity: ${props => props.isActive ? "50%" : "initial"};

    @media only screen and (max-width: 1200px) {
        margin-left: 0;
        font-size: 1rem;
        
        &:first-of-type {
            grid-row: span 1;
            grid-column: span 2;
            
            ${BtnIcon} {
                width: 90px;
                height: 90px;
            }

            ${BtnIconAbbr} {
                font-size: 2rem;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        height: 90px;
        margin-left: 0;
        padding: .5rem 0;
        display: flex;
        font-size: .85rem;

        &:first-of-type {
            grid-column: span 1;

            ${BtnIcon} {
                width: 75px;
                height: 75px;
            }

            ${BtnIconAbbr} {
                font-size: 2.2rem;
            }
        }
    }
`;

export const BtnText = styled.div`
    letter-spacing: initial;
    font-weight: 500;
    hyphens: auto;
    width: 400px;

    @media only screen and (max-width: 1200px) {
        width: 250px;
    }

    @media only screen and (max-width: 600px) {
        width: 200px;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
`;
    
export const ListItem = styled.li`
    display: flex;
    align-items: top;

    &:before {
        content: "•";
        color: #96a1b3;
        font-weight: bold;
        display: inline-block; 
        width: 5.5rem;
        margin-left: .5rem;
        position: relative;
        top: -1.55rem;
        font-size: 4rem;
    }

    @media only screen and (max-width: 1200px) {
        &:before {
            font-size: 3.5rem;
            width: 3rem;
        }
    }

    @media only screen and (max-width: 600px) {
        &:before {
            top: -0.85rem;
            font-size: 2rem;
            width: 2rem;
            margin-left: .5rem;
        }
    }
`;
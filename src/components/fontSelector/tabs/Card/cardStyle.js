import styled from 'styled-components';
import { deviceWidth } from '../../responsiveStyle';

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 450px 1fr; 
    border-radius: 10px;

    @media ${deviceWidth.mediumMax} {
            grid-template-columns: 1fr 1fr;
            width: 525px;
    }

    @media ${deviceWidth.smallMax} {
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

    @media ${deviceWidth.mediumMax} {
        width: 70px;
        height: 70px;
    }

    @media ${deviceWidth.smallMax} {
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
    
    @media ${deviceWidth.mediumMax} {
        font-size: 1.4rem;
    }

    @media ${deviceWidth.smallMax} {
        font-size: 1.25rem;
    }
`;

export const BtnTextContainer = styled.div`
    width: 400px;
    padding-top: 20px;

@media ${deviceWidth.mediumMax} {
        min-height: 125px;
        width: 245px;
        padding-top: 15px;
    }

    @media ${deviceWidth.smallMax} {
        width: 200px;
    }
`;
    
export const BtnText = styled.span`
    display: flex;
    align-items: top;
    font-size: 2.05rem;
    letter-spacing: 2px;
    line-height: 2.7rem;
    font-weight: 500;
    hyphens: auto;

    &:before {
        content: "•";
        color: #96a1b3;
        font-weight: bold;
        display: inline-block; 
        min-width: 32px;
        max-width: 32px;
        margin-left: 2.8rem;
        position: relative;
        top: -.15rem;
        font-size: 2rem;
    }

    @media ${deviceWidth.mediumMax} {
        font-size: 1.35rem;
        line-height: 2.5rem;
        letter-spacing: 1px;

        &:before {
            font-size: 1.4rem;
            margin-left: 0rem;
        }
    }

    @media ${deviceWidth.smallMax} {
        &:before {
            top: -0.85rem;
            font-size: 2rem;
            width: 2rem;
            margin-left: .5rem;
        }
    }
`;

export const CardBtn = styled.button`
    background-color: initial;
    border: initial;
    text-align: initial;
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    cursor: pointer;
    color: #202930;
    padding: 0;
    margin-bottom: 70px;

    &:first-of-type {
        grid-row: span 2;

        ${BtnIcon} {
            width: 200px;
            height: 200px;
        }
        
        ${BtnIconAbbr} {
            font-size: 4.4rem;
        }

        ${BtnTextContainer} {
            width: 350px;
        }

        ${BtnText} {
            &:before {
                margin-left: 0;
            }
        }
    }

    @media ${deviceWidth.mediumMax} {
        margin-bottom: 10px;

        &:first-of-type {
            ${BtnTextContainer} {
                width: 385px;
            }
        }
    }

    opacity: ${props => props.isActive ? "50%" : "initial"};

    @media ${deviceWidth.mediumMax} {
        margin-left: 0;
        font-size: 1rem;
        
        &:first-of-type {
            grid-row: span 1;
            grid-column: span 2;

            ${BtnText} {
                margin-left: 20px;

                &:before {
                    min-width: 24px;
                    max-width: 24px;
                }
            }
            
            ${BtnIcon} {
                width: 90px;
                height: 90px;
            }

            ${BtnIconAbbr} {
                font-size: 2rem;
            }
        }
    }

    @media ${deviceWidth.smallMax} {
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
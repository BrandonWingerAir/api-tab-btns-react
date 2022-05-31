import styled, { css } from 'styled-components';

export const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    border-radius: 10px;
    padding: 10px;

    @media only screen and (max-width: 1200px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
            width: 575px;
            padding-top: 0;
        }
    }

    @media only screen and (max-width: 600px) {
        .container {
            grid-template-columns: repeat(1, 1fr);
            width: 315px;
            padding: 10px 5px;
        }
    }
`;

export const FontBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 65px;
    height: 225px;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #202930;
    background-color: var(--secondary);
    transition: background-color 0.25s;

    &:hover {
        background-color: var(--primary);
    }

    ${(props) => {
        switch (props.btnId) {
            case 112:
            return css`
                grid-column: 1 / span 3;
                grid-row: 1 / 3;
                display: block;
                margin-top: 35px;
                margin-left: 35px;
            `;
            case 113:
            return css`
                grid-column: 4 / 8;
                grid-row: 1 / 2;
            `;
            case 114:
            return css`
                grid-column: 4 / 8;
                grid-row: 3 / 2;
            `;
            default:
            return;
        }
    }}

    opacity: ${props => props.isActive ? "50%" : "initial"};

    @media only screen and (max-width: 1200px) {
        margin-left: 0;
        display: block;
        padding: 0.25rem .5rem;
    }

    @media only screen and (max-width: 600px) {
        height: 90px;
        margin-left: 0;
        padding: .5rem 0;
        display: flex;
    }
`;

export const BtnIcon = styled.div`
    border : 2px solid #000001;
    border-radius: 25px;
    padding: 6px;
    
    ${(props) => {
        switch (props.btnId) {
            case 112:
                return css`
                    width: 200px;
                    height: 200px;
                `;
            default:
                return css`
                    width: 140px;
                    height: 140px;
                `;
            }
    }}

    @media only screen and (max-width: 1200px) {
        margin-left: 10px;

        ${(props) => {
            switch (props.btnId) {
                case 112:
                    return css`
                        width: 90px;
                        height: 90px;
                    `;
                default:
                    return css`
                        width: 70px;
                        height: 70px;
                    `;
                }
        }}
    }

    @media only screen and (max-width: 600px) {
        margin-left: 0;

        ${(props) => {
            switch (props.btnId) {
                case 112:
                    return css`
                        width: 85px;
                        height: 85px;
                    `;
                default:
                    return css`
                        width: 55px;
                        height: 55px;
                    `;
                }
        }}
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
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    left: 12.5%;

    ${(props) => {
        switch (props.btnId) {
            case 112:
                return css`
                    font-size: 4rem;
                `;
            default:
                return css`
                    font-size: 2.4rem;
                `;
        }
    }}

    @media only screen and (max-width: 1200px) {
        ${(props) => {
            switch (props.btnId) {
                case 112:
                    return css`
                        font-size: 2rem;
                    `;
                default:
                    return css`
                        font-size: 1.4rem;
                    `;
            }
        }}
    }

    @media only screen and (max-width: 600px) {
        ${(props) => {
            switch (props.btnId) {
                case 112:
                    return css`
                        font-size: 2.2rem;
                    `;
                default:
                    return css`
                        font-size: 1.25rem;
                    `;
            }
        }}
    }
`;

export const BtnText = styled.div`
    font-size: 2rem;
    font-weight: 500;
    hyphens: auto;
    max-width: 350px;

    ${(props) => {
        switch (props.btnId) {
            case 112:
                return css`
                    margin-left: 0;
                `;
            default:
                return css`
                    margin-left: 50px;
                `;
        }
    }}
`;

export const ListStyle = styled.ul`
    padding-left: 0;
    margin-top: 20px;
    position: relative;
    list-style: none;

    ${(props) => {
        switch (props.btnId) {
            case 112:
                return css`
                    left: 30px;
                    top: 10px;
                `;
            default:
                return css`
                    left: 15px;
                `;
        }
    }}
`;

export const ListText = styled.li`
    &:before {
        content: "•";
        color: #96a1b3;
        font-weight: bold;
        display: inline-block; 
        width: 2rem;
        margin-left: -2rem;
        position: relative;
        top: .5rem;
        font-size: 4rem;
    }
`;
import styled, { keyframes } from 'styled-components';


interface ILegendProps {
    color: string
}

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    50% {
        opacity: .3;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 50%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white}; 

    border-radius: 7px; 

    display: flex; 

    animation: ${animate} .5s;

    @media(max-width: 770px) {
        display: flex;
        width: 100%;
    }
`;

export const LeftSide = styled.aside`
    padding: 30px 20px;

    > h2, h3 {
        margin-bottom: 20px;
    }

    @media(max-width: 1345px) {
        padding: 0 15px 0; // 0 em cima, 15px embaixo e 5px nos lados 
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media (max-width: 420) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 15px;
    overflow-y: scroll;

    //   O uso do '&' antecedendo cada instrução é necessário para que não sejam  
    // ignoradas
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    } 

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    } 

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 15px;

    > div {
        background-color: ${props => props.color};

        width: 53px;
        height: 35px;
        border-radius: 3px; 

        font-size: 15px;
        line-height: 40px; 
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1345px) {
        font-size: 15px;
        margin: 3px 0; 

        > div {
            height: 35px;
            width: 48px; 
            line-height: 35px;
            margin-right: 7px;
        }

        > span {
            margin-left: 7px;
        }
    }
`;

export const RightSide = styled.main`
    display: flex;
    flex: 1; // Ocupa toda largura e altura que estiver disponível 
    justify-content: center;

    @media(max-width: 1345px) {
        height: 100%;
    }
`; 
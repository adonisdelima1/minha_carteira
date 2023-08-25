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
    width: 49%; 
    min-height: 260px; 

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px; 

    display: flex; 

    animation: ${animate} .5s;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;

        width: 100%; 
        height: auto;
    }
`;

export const LeftSide = styled.div`
    // Comentado porque estava empurrando as barras do gráfico
    /* flex: 1; */
    padding: 16px 35px; 

    > h2 {
        margin-bottom: 10px;
    }
`;

export const RightSide = styled.div`
    flex: 1; // Assim dizemos que o RightSide ocupará o espaço que sobrar 
    min-height: 150px;
    width: 45%;
    
    display: flex;
    justify-content: center;

    padding: 30px 25px;

    @media(max-width: 1200px) {
        width: 100%; 
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

    @media(max-width: 1200px) {
        display: flex;
        height: auto;
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

    @media(max-width: 1200px) {
        > div {
            width: 53px;
            height: 35px;

            font-size: 16px;
            line-height: 35px; 
        }

        margin-right: 10px;
    }
`;


import styled from 'styled-components';


interface ISubtitleProps {
    color: string
}

export const Container = styled.div`
    width: 50%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white}; 

    border-radius: 7px; 

    display: flex;
`;

export const LeftSide = styled.aside`
    padding: 30px 20px;

    > h2, h3 {
        margin-bottom: 20px;
    }
`;

export const SubtitleContainer = styled.ul`
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
`;

export const Subtitle = styled.li<ISubtitleProps>`
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
`;

export const RightSide = styled.main`
    display: flex;
    flex: 1; // Ocupa toda largura e altura que estiver disponível 
    justify-content: center;
`; 
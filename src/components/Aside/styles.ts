import styled from 'styled-components'; 

export const Container = styled.div`
    //   Definindo o grid area que reservamos para o Aside nos arquivos do 
    // nosso Layout (ver src/Components/Layout/styles.ts)
    grid-area: AS; 

    // Definindo a cor da fonte usando valores implementados em src/styles 
    color: ${props => props.theme.colors.white};

    // Definindo a cor do background que será a mesma do MainHeader
    background-color: ${props => props.theme.colors.secondary};
`
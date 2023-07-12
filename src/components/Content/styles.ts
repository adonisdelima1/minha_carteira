import styled from 'styled-components'; 

export const Container = styled.div`
    //   Definindo a grid-area que reservamos para o Content nos arquivos  
    // do nosso Layout (ver Layout/styles.ts)
    grid-area: CT; 

    // Definindo a cor da fonte usando valores implementados em src/styles 
    color: ${props => props.theme.colors.white};

    // Definindo a cor do background 
    background-color: ${props => props.theme.colors.primary}; 
`
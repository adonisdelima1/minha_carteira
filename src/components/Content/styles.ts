import styled from 'styled-components'; 

export const Container = styled.div`
    //   Definindo a grid-area que reservamos para o Content nos arquivos  
    // do nosso Layout (ver Layout/styles.ts)
    grid-area: CT; 

    // Definindo a cor da fonte usando valores implementados em src/styles 
    color: ${props => props.theme.colors.white};

    // Definindo a cor do background 
    background-color: ${props => props.theme.colors.primary}; 

    // Especificando apenas um valor em padding afetamos os 4 lados 
    padding: 25px; 

    // 100 = 100% da view port height (que é a altura da tela) 
    //   Então fazemos 100vh - 70px para o content usar apenas a quantidade de 
    // pixels que sobra depois que o cabeçalho pega 70px  
    height: calc(100vh - 70px); 

    //   O que não couber na área de conteúdo só deve ser exibido ao acionarmos 
    // a barra de rolagem, para isso configuramos o campo overflow-y 
    overflow-y: scroll; 
    
    
    //   O uso do '&' antecedendo cada instrução é necessário para não sejam  
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
`
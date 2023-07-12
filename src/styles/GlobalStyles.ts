import { createGlobalStyle } from 'styled-components';

// Esse arquivo é usado para definir os estilos globais 

// O asterisco é instrução para ser aplicada na página toda 

//    O tamanho do elemento pode perder o controle se o box-sizing não for 
// aplicado de maneira correta 

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0; 
        font-family: 'Roboto', sans-serif;
    } 

    button {
        cursor: pointer;
    }

`;

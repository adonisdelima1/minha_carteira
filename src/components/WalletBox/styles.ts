import styled from 'styled-components'; 

interface IContainerProps {
    color: string
}
export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;

    // 10px em cima e embaixo e 0 (zero) dos lados 
    margin: 10pz 0;

    background-color: ${props => props.color};

    // Cor da fonte 
    color: ${props => props.theme.colors.white}; 

    // Arredondando os cantos 
    border-radius: 7px; 

    // Padding esticando o container +10px em cima e embaixo e +20px nos lados 
    padding: 10px 20px; 

    position: relative;
    
    //   Essa linha fará com que a parte da imagem que extrapola as dimensões 
    // do box seja escondida 
    overflow: hidden;

    // Essas regras de estilo são aplicadas a toda img contida nesse container 
    > img {
        height: 110%;
        position: absolute;

        // Puxa a img para cima 
        top: -10px;

        // Puxa a img para a direita 
        right: -30px;

        // Adicionando o efeito meio apagado 
        opacity: .3;
    }
    
    // Essas regras de estilo são aplicadas a todo span contido nesse container
    > span {
        font-size: 20px;
        font-weight: 500;
    }

    // Essas regras de estilo são aplicadas a todo small contido nesse container
    > small {
        font-size: 12px; 
        position: absolute;
        bottom: 10px;
    }
`;
 
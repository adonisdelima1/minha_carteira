import styled from 'styled-components'; 

interface ITagProps {
    color: string,
}

export const Container = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
    
    // Para remover o bulet point (aquela bolinha que indica um tópico)
    list-style: none;

    // Arredondando os cantos 
    border-radius: 5px; 

    // Margem de 10px em cima e embaixo porém 0 dos lados 
    margin: 10px 0; 

    //   Padding é o que aumenta o tamanho do elemento (estica), no caso aqui 
    // definimos 12px em cima e embaixo e 10px dos lados 
    padding: 12px 10px; 

    // Display flex deixa um elemento ao lado do outro naturalmente 
    display: flex;

    // Space between vai colocar o máximo de espaço possível entre os elementos 
    justify-content: space-between; 

    // Posiciona os elementos ao centro tanto vertical quanto horizontalmente 
    align-items: center; 

    //   Position relative porque a da tag será absoluta e assim conseguimos 
    // deixar a tag e o título próximos um do outro 
    position: relative;

    // Quando passar o mouse em cima o ponteiro do mouse vira uma mãozinha 
    cursor: pointer;

    // Definindo o tempo de duração da animação que vamos configurar com hover 
    transition: all .3s; 


    &:hover {
        opacity: .7;
        transform: translateX(10px);
    } 


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    // Para todo span que estiver dentro de uma div nesse container 
    > div span {
        font-size: 22px;
        font-weight: 500;
    }
`; 
 
export const Tag = styled.div`
    width: 10px;

    // 60% do elemento onde a tag estiver contida
    height: 60%;

    background-color: ${props => props.color};

    position: absolute; 

    //   Configurando left como 0 (zero) faremos com que ele se posicione na 
    // extremidade esquerda do container
    left: 0;
`; 
 
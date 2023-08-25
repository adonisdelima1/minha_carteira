import styled from "styled-components"; 

// Aqui temos um exemplo de como passar props para um styled component
interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between;
    margin-bottom: 25px;

    @media(max-width: 320px) {
        flex-direction: column;
    }
`; 

//   Para que possamos usar as props temos que tipar o styled component com 
// a interface 
export const TitleContainer = styled.div <ITitleContainerProps>`
    //   Na linha abaixo criamos uma regra para afetar apenas os elementos
    // h1 contidos dentro deste container
    > h1 {
        color: ${props => props.theme.colors.white};

        // Alterando o evento 'after' apenas dos elementos h1
        &::after {
            //   Para alterar o evento 'after' é preciso especificar o 
            // content nem que seja um valor vazio
            content: '';

            //   Quando especificamos o 'display' como 'block' podemos 
            // trabalhar com largura e altura 
            display: block;
            width: 55px;

            //   O código comentado abaixo pega a cor do tema que criamos no 
            // arquivo global em minha_carteira/src/styles/themes
            // border-bottom: 10px solid ${ props => props.theme.colors.warning }; 
            
            // Usando o valor contido nas props do styled component
            border-bottom: 10px solid ${ props => props.lineColor };
        }
    }

    @media(max-width: 400px) {
        > h1 {
            font-size: 23px;

            
            &::after {
            
                content: '';

                //   Quando especificamos o 'display' como 'block' podemos 
                // trabalhar com largura e altura 
                display: block;
                width: 55px;
                border-bottom: 7px solid ${ props => props.lineColor };
            }
        }        
    }
`;

export const DateFilters = styled.div`
    display: flex;

    @media(max-width: 350px) {
        width: 100%;

        justify-content: space-around; 

        margin-top: 20px;
    }
`;
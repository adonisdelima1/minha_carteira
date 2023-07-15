import styled from 'styled-components'; 

export const Container = styled.div`
    
`;

export const Content = styled.div`
    
`;

export const Filters = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: center;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        // Essa linha deixa o background transparente
        background: none; 

        // Cor da fonte 
        color: ${props => props.theme.colors.white}; 

        // 0 (zero) em cima e embaixo e 10px nos lados
        margin: 0 10px; 

        margin-bottom: 30px;

        transition: opacity .3s; 

        //   Definindo que seja naturalmente meio apagado e então, apenas quando 
        // estiver selecionado, a opacidade passará a ser 100% 
        opacity: .4;

        &:hover {
            opacity: .7;
        } 

        &.tag-filter-recurrent::after {
            content: '';
            display: block;
            width: 55px; 
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success};
        }

        &.tag-filter-eventual::after {
            content: '';
            display: block;
            width: 55px; 
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
        } 

        &.tag-active {
            opacity: 1;
        }
    }
`;
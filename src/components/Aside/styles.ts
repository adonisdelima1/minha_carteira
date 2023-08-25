import styled, { css } from 'styled-components'; 

interface IContainerProps {
    IsAsideMenuOpen: boolean
}

interface IThemeToggleFooterProps {
    IsAsideMenuOpen: boolean
}

export const Container = styled.div<IContainerProps>`
    //   Definindo o grid area que reservamos para o Aside nos arquivos do 
    // nosso Layout (ver src/Components/Layout/styles.ts)
    grid-area: AS; 

    // Definindo a cor da fonte usando valores implementados em src/styles 
    /* color: ${props => props.theme.colors.white}; */

    // Definindo a cor do background que será a mesma do MainHeader
    background-color: ${props => props.theme.colors.secondary};

    // O padding-left empurra os elementos internos para a direita  
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative; 

    @media(max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        // O boolean define se o menu está fechado ou aberto 
        height: ${props => props.IsAsideMenuOpen ? '100vh' : '70px'};
        
        //   Em um primeiro momento a intenção era tampar o toggle de tema. Isso 
        // define a largura total do menu  
        width: 180px;
        
        // Esse overflow como hidden evita que os botôes apareçam de intrujão
        overflow: hidden;

        //   Isso é um exemplo prático para quando precisamos alterar mais de 
        // uma propriedade  
        ${props => !props.IsAsideMenuOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex; 
    align-items: center; 
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white}; 
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;

    //   Por padrão, o display flex coloca os elementos lado a lado. Então, para 
    // que nossas opções de menu sejam posicionadas uma embaixo da outra, usamos o 
    // flex-direction 'settado' para 'column'
    flex-direction: column;

    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info}; 
    text-decoration: none; 

    // Margem de 7px em cima e embaixo e 0 nos lados 
    margin: 7px 0; 

    //Organizando o ícone e o texto do botão/link 
    display: flex;
    align-items: center;

    // Configurando a animação ao passar o mouse em cima: 
    
    // Velocidade da transição
    transition: opacity .4s;
    
    // Definindo quais propriedades mudarão quando hover for acionado
    &:hover {
        opacity: .7;
    }

    // Garantindo que estamos mexendo apenas nos svg dos react-icons 
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 17px;
    color: ${props => props.theme.colors.info}; 
    
    border: none;
    background: none;

    // Margem de 7px em cima e embaixo e 0 nos lados 
    margin: 7px 0; 

    //Organizando o ícone e o texto do botão/link 
    display: flex;
    align-items: center;

    // Configurando a animação ao passar o mouse em cima: 
    
    // Velocidade da transição
    transition: opacity .4s;
    
    // Definindo quais propriedades mudarão quando hover for acionado
    &:hover {
        opacity: .7;
    }

    // Garantindo que estamos mexendo apenas nos svg dos react-icons 
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`; 


export const MenuToggle = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover {
       opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px) {
        display: flex; 
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px) {
        display: ${props => props.IsAsideMenuOpen ? 'flex' : 'none'};
    }
`;
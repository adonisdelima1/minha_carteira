import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg';

import { useAuthContext } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    Container, 
    Header, 
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    MenuToggle,
    ThemeToggleFooter
} from  './styles'; 

import { useState } from 'react';

import Toggle from '../Toggle';

export default function Aside(){
    const { signOut } = useAuthContext(); 
    const { toggleTheme, theme } = useTheme(); 
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(theme.title === 'dark' );


    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleThemeColorChange = () => {
        setIsDarkTheme(!isDarkTheme);
        toggleTheme();
    }
    
    return(
        <Container IsAsideMenuOpen={isMenuOpen}>
            <Header>
                
                <MenuToggle onClick={handleToggleMenu}>
                    {isMenuOpen ? <MdClose /> : <MdMenu />}
                </MenuToggle>
                
                <LogoImg src={logoImg} alt="Logo Minha Carteira" /> 
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink> 
                <MenuItemLink href='/list/incomes'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink> 
                <MenuItemLink href='/list/outgoes'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink> 
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton> 
            </MenuContainer>

            <ThemeToggleFooter IsAsideMenuOpen={isMenuOpen}>
                <Toggle 
                    leftLabel='Light'
                    rightLabel='Dark'
                    checked={isDarkTheme}
                    onChange={handleThemeColorChange}
                />
            </ThemeToggleFooter>
        </Container>
    );
}
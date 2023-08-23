import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg';

import { useAuthContext } from '../../hooks/auth';

import {
    Container, 
    Header, 
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from  './styles'; 



export default function Aside(){
    const { signOut } = useAuthContext();
    
    return(
        <Container>
            <Header>
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
        </Container>
    );
}
import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp
} from 'react-icons/md'

import {
    Container, 
    Header, 
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink
} from  './styles'; 

import logoImg from '../../assets/logo.svg';


export default function Aside(){
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" /> 
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/dashboard'>
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
                <MenuItemLink href=''>
                    <MdExitToApp />
                    Sair
                </MenuItemLink> 
            </MenuContainer>
        </Container>
    );
}
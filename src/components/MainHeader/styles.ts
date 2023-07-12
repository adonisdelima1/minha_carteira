import styled from 'styled-components'; 

export const Container = styled.div`
    //   Definindo o grid area que reservamos para o MainHeader nos arquivos  
    // do nosso Layout (ver Layout/styles.ts)
    grid-area: MH; 

    // Definindo a cor da fonte usando valores implementados em src/styles 
    color: ${props => props.theme.colors.white};
    

    // Definindo a cor do background 
    
    //    Uma vez que sobrescrevemos a tipagem do styled-components com a  
    // nossa própria (ver arquivo ../styles/styled.d.ts), não precisamos  
    // mais da definição que indica explicitamente a cor como constante, por  
    // isso a linha abaixo foi comentada e trocada pela chamada da cor  
    // padrão que estabelecemos em ../styles/themes 
    // background-color: #252A48; 
    
    //    Para esse novo formato de definição de cores funcionar, precisamos 
    // definir, lá no arquivo inicial src/App.tsx, qual será o tema, se dark 
    // ou light, para isso importamos o theme provider do styled-components 
    // colocar a nossa aplicação dentro desse ThemeProvider e nas props do 
    // ThemeProvider especificamos se será dark ou light 
    background-color: ${props => props.theme.colors.secondary}; 

    // Alinha os elementos lado a lado 
    display: flex; 

    //   Com essa linha de justify colocammos cada elemento em uma extremidade 
    // (horizontalmente falando)
    justify-content: space-between; 

    // Com essa linha de align organizamos a os elementos verticalmente 
    align-items: center; 

    // Configurando a borda que fará a fronteira visual entre header e content 
    border-bottom: 1px solid ${props => props.theme.colors.gray}; 

    padding: 0 35px;
`

// Implementação do elemento Profile 
export const Profile = styled.div`
    color: ${props => props.theme.colors.white}
`;

// Implementação do elemento Welcome 
export const Welcome = styled.h3``; 

// Implementação do elemento UserName 
export const UserName = styled.span``;
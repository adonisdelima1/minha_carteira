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
`
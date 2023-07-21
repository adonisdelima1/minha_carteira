import styled from 'styled-components'; 

export const Container = styled.div`
    
`; 

export const Content = styled.div`
    display: flex;
    justify-content: space-between; 

    //   Combinando o display flex com a instrução flex-wrap, isso permite que 
    // os elementos possam quebrar a linha impedindo que fiquem distorcidos ou 
    // desconfigurados 
    flex-wrap: wrap;
`;
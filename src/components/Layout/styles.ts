import styled from 'styled-components'; 

export const Container = styled.div`
    //   Definindo o display como grid obrigamos todos os elementos contidos 
    // no container a obedecerem o padrão css de grid layout
    display: grid;

    //   Basicamente definindo que o grid terá duas colunas, uma com tamanho 
    // específico (nosso menu Aside) e outra que aproveitará o que sobrar de 
    // espaço (onde ficará o Content)
    grid-template-columns: 250px auto;
    
    //   Definindo duas linhas para o grid layout, uma com tamanho específico 
    // (onde ficará o nosso MainHeader) e outra que ocupará o espaço restante 
    grid-template-rows: 70px auto; 

    //   Vamos definir a distribuição das colunas do grid linha por linha 
    grid-template-areas: 
    'AS MH'
    'AS CT';

    // Definindo que o container deve preencher 100% da altura do display (vh)
    height: 100vh; 
`;
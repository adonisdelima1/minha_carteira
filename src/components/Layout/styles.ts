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




    //   Usando media-queries para ativar o estilo responsivo mais adequado para 
    // quando o display do dispositivo que estiver rodando  o nosso App tiver 
    // largura  igual ou menor que 600 pixels.
    @media(max-width: 600px){
        
        grid-template-columns: 100%;
        grid-template-rows: 70px auto; 

        //    Se o dispositivo que acessar o nosso web tiver largura igual ou 
        // menor que 600 pixels então configuraremos as grid-template-areas 
        // removendo a coluna do menu aside.
        grid-template-areas: 
        'MH' 
        'CT';
    }

`;
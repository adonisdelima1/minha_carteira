//   O styled.d.ts é um recurso do typescript capaz de sobrescrever  
// tipos de arquivo. Nesse caso, vamos usá-lo para informar estilos 
// que devem ser padrão para a aplicação inteira 

import 'styled-components';

//    A linha abaixo serve para informarmos o nome do módulo que 
// vamos sobrescrever, porque o módulo styled-components tem suas 
// próprias tipagens definidas para termos como primary, success 
// etc    
declare module 'styled-components' {
    //   DefaultTheme é uma interface que faz parte do pacote styled-components 
    // e que estamos sobrescrevendo aqui. Após sobrescrever é necessário fazer 
    // o import do ThemeProvider lá no arquivo App.tsx
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            tertiary: string,

            white: string,
            black: string,
            gray: string,

            success: string,
            info: string,
            warning: string,
        }
    }
}
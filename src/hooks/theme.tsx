import { createContext, useState, useContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

//   Vamos definir agora quais propriedades o nosso contexto terá, que serão o 
// tema e a função que troca o tema (de 'light' para 'dark' por exemplo)
interface IThemeContext {
    toggleTheme(): void, 
    theme: ITheme
}



//   Interface do nosso tema que terá a mesma estrutura dos temas dark e light 
// implementados na pasta src/styles/themes 
interface ITheme {
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

// ThemeContext que instanciamos tipando com nossas próprias interfaces 
const ThemeContext = createContext<IThemeContext>({} as IThemeContext); 

// Interface e component responsáveis por prover acesso ao tema 
interface IThemeProviderProps {
    children: React.ReactNode
}
export function ThemeProvider(props: IThemeProviderProps) {
    const [theme, setTheme] = useState<ITheme>(dark);

    const toggleTheme = () => {
        if(theme.title === 'dark') {
            setTheme(light);
        } else {
            setTheme(dark);
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};

//   Retornará o tema com os valores contidos no tema definido (cores de fontes 
// e etc)
export function useTheme(): IThemeContext {
    const context = useContext(ThemeContext); 

    return context;
}
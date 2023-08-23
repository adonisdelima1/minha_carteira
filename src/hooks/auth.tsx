import { createContext, useContext, useState } from 'react'; 

interface IAuthContext {
    logged: boolean, 
    signIn(email:string, password:string): void,
    signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext); 

function AuthProvider(props: any) {
    const [logged, setLogged] = useState<boolean>(() => {
        //   O estado inicial dessa flag será definido pela presença ou ausência 
        // dessa chave com valor no Local Storage do navegador do usuário 
        const isLogged = localStorage.getItem('@minha-carteira:logged');
        
        //   O operador de duas exclamações funciona para fazer um teste lógico 
        // checando se a variável mencionada possui ou não algum conteúdo 
        // armazenado (ausência de conteúdo, ou seja, ou seja se a variável 
        // mencionada não estiver populada o resultado será 'false') 
        return !!isLogged; 
    });

    function signIn(email:string, password:string) {
        if(email === 'adonis@email.com' && password === '123') {
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuário inválidos!'); 
        }
    }

    function signOut() {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value ={{logged, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useAuthContext(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuthContext };
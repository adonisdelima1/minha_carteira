// useMemo é um hook do react que decora valores 
import {useMemo} from 'react'

// Importando nossos emojis 
import emojis from '../../utils/emojis';

import { 
    Container, 
    Profile, 
    Welcome, 
    UserName 
} from './styles'; 

export default function MainHeader() {
    const emoji = useMemo(() => {
        //   Math.floor arredonda e o Math.random nos dá um número random 
        // menor que 1 e então multiplicamos pelo tamanho do array 
        const indice = Math.floor(Math.random() * emojis.length); 

        //   Usamos o valor contido em indice para definir qual item do 
        // array, ou seja, qual emoji foi sorteado 
        return emojis[indice];
    }, []);
    return(
        <Container>
            <h1>Toggle</h1>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Adonis Dias</UserName>
            </Profile>
        </Container>
    );
}


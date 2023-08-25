// useMemo é um hook do react que decora valores 
import { useMemo, useState } from 'react'

// Importando nossos emojis 
import emojis from '../../utils/emojis';

// Importando nosso hook personalisado para consumir ou alterar o tema 
import { useTheme } from '../../hooks/theme';

// Styled components do MainHeader 
import { 
    Container, 
    Profile, 
    Welcome, 
    UserName
} from './styles'; 

// Meus components 
import Toggle from '../Toggle';

export default function MainHeader() {
    const { toggleTheme, theme } = useTheme();

    const [isDarkTheme, setIsDarkTheme] = useState(theme.title === 'dark' );
    
    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme); 
        toggleTheme();
    }
    
    
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
            <Toggle 
                leftLabel='Light'
                rightLabel='Dark'
                checked={isDarkTheme}
                onChange={handleThemeChange}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Adonis Dias</UserName>
            </Profile>
        </Container>
    );
}


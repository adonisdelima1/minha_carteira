// My components
import Layout from './components/Layout';

// styled-components' ThemeProvider
import { ThemeProvider } from 'styled-components';

// My ThemeProvider method to get theme provided in index.tsx
import { useTheme } from './hooks/theme';

// My themes 
import dark from './styles/themes/dark';
import light from './styles/themes/light';

// My styles 
import GlobalStyles from './styles/GlobalStyles'; 

// My routes 
import Routes from './routes';



export default function App() {
    const {theme} = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}
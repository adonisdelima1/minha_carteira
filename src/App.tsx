import Layout from './components/Layout';

import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles'; 
import Routes from './routes';



export default function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}
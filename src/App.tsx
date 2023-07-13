import Layout from './components/Layout';

import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles'; 
import Dashboard from './pages/Dashboard';



export default function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <Dashboard />
            </Layout>
        </ThemeProvider>
    );
}
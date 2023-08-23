import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes'; 
import AuthRoutes from './auth.routes';

import { useAuthContext } from '../hooks/auth'; 

export default function Routes() {
    const { logged } = useAuthContext();
    
    return (
        <BrowserRouter>
            {logged ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    );
}
import { Routes, Route  } from 'react-router-dom'; 

import SignIn from '../pages/SignIn'; 

export default function AuthRoutes() {
    return(
        <Routes>
            <Route path='/signin' Component={SignIn} />
            <Route path='/' Component={SignIn} />
        </Routes>
    );
}
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './contexts';
import { Router } from './Router';
import './App.css';

const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </AppContextProvider>
    );
};

export { App };

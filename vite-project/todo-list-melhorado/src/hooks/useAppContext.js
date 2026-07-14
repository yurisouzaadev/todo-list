import { useContext } from 'react';

import { AppContext } from '../contexts';

const useAppContext = () => {
    const contexto = useContext(AppContext)

return contexto;
};

export { useAppContext };
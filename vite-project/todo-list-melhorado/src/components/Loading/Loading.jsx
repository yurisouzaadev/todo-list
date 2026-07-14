import { Loader2 } from 'lucide-react';

import style from './Loading.module.css';

const Loading = () => {
    return (
        <span className={style.Loading} role="status" aria-label="Carregando">
            <Loader2 size={16} />
        </span>
    );
};

export { Loading };

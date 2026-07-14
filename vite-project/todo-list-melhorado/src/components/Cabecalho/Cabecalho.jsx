import { Link } from 'react-router-dom';
import { ListChecks } from 'lucide-react';

import { AlternadorTema } from '../AlternadorTema';
import style from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <header className={style.Cabecalho}>
            <Link to="/" className={style.logo}>
                <ListChecks size={22} />
                <h1>
                    <span>ToDo</span> List
                </h1>
            </Link>

            <nav className={style.nav}>
                <Link to="/sobre-nos">Sobre Nós</Link>
                <AlternadorTema />
            </nav>
        </header>
    );
};

export { Cabecalho };

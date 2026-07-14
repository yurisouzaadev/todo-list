import { motion } from 'framer-motion';

import { useAppContext } from '../../hooks';
import { FILTRO } from '../../constants';
import style from './FiltrosTarefas.module.css';

const OPCOES = [
    { valor: FILTRO.TODAS, label: 'Todas' },
    { valor: FILTRO.PENDENTES, label: 'Pendentes' },
    { valor: FILTRO.CONCLUIDAS, label: 'Concluídas' },
];

const FiltrosTarefas = () => {
    const { filtro, setFiltro } = useAppContext();

    return (
        <div className={style.FiltrosTarefas} role="tablist" aria-label="Filtrar tarefas">
            {OPCOES.map((opcao) => {
                const ativo = filtro === opcao.valor;
                return (
                    <button
                        key={opcao.valor}
                        type="button"
                        role="tab"
                        aria-selected={ativo}
                        className={style.opcao}
                        onClick={() => setFiltro(opcao.valor)}
                    >
                        {ativo && (
                            <motion.span
                                layoutId="filtro-ativo"
                                className={style.fundoAtivo}
                                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                            />
                        )}
                        <span className={style.texto}>{opcao.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export { FiltrosTarefas };

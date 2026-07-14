import { motion } from 'framer-motion';

import { useAppContext } from '../../hooks';
import style from './BarraProgresso.module.css';

const BarraProgresso = () => {
    const { tarefas, totalConcluidas, progresso } = useAppContext();

    if (!tarefas.length) return null;

    return (
        <div className={style.BarraProgresso}>
            <div className={style.cabecalho}>
                <span>
                    {totalConcluidas} de {tarefas.length} tarefas concluídas
                </span>
                <span className={style.percentual}>{progresso}%</span>
            </div>
            <div className={style.trilha}>
                <motion.div
                    className={style.preenchimento}
                    initial={false}
                    animate={{ width: `${progresso}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

export { BarraProgresso };

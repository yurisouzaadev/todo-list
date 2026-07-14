import { motion } from 'framer-motion';

import { BarraProgresso, FiltrosTarefas, FormCriarTarefa, ListaTarefas } from '../../components';
import style from './Inicial.module.css';

const Inicial = () => {
    return (
        <motion.div
            className={style.Inicial}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className={style.titulo}>
                <h2>Minhas tarefas</h2>
                <p>Organize seu dia com prioridade, prazo e drag-and-drop.</p>
            </div>

            <FormCriarTarefa />
            <BarraProgresso />
            <FiltrosTarefas />
            <ListaTarefas />
        </motion.div>
    );
};

export { Inicial };

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <motion.div
            className={styles.NotFound}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Compass size={48} strokeWidth={1.5} />
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link to="/" className={styles.link}>
                Voltar para as tarefas
            </Link>
        </motion.div>
    );
};

export { NotFound };

import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { useAppContext } from '../../hooks';
import style from './AlternadorTema.module.css';

const AlternadorTema = () => {
    const { tema, alternarTema } = useAppContext();
    const escuro = tema === 'escuro';

    return (
        <motion.button
            type="button"
            className={style.AlternadorTema}
            onClick={alternarTema}
            whileTap={{ scale: 0.85, rotate: 20 }}
            aria-label="Alternar tema claro/escuro"
            title="Alternar tema"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={tema}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className={style.icone}
                >
                    {escuro ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
};

export { AlternadorTema };

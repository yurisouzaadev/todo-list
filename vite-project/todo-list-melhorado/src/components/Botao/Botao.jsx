import { motion } from 'framer-motion';

import { TIPOBOTAO } from './constants';
import style from './Botao.module.css';

const Botao = (props) => {
    const { texto, tipo = TIPOBOTAO.PRIMARIO, icone, type = 'submit', className = '', ...outrasProps } = props;

    return (
        <motion.button
            type={type}
            className={`${style.Botao} ${style[tipo] ?? ''} ${className}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.15 }}
            {...outrasProps}
        >
            {icone}
            {texto}
        </motion.button>
    );
};

export { Botao };

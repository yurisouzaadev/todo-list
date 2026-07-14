import { motion } from 'framer-motion';
import { Github, Layers, Palette, Sparkles } from 'lucide-react';

import style from './SobreNos.module.css';

const TECNOLOGIAS = [
    'React',
    'React Router',
    'Context API',
    'Vite',
    'Framer Motion',
    'dnd-kit',
    'CSS Modules',
    'lucide-react',
];

const SobreNos = () => {
    return (
        <motion.div
            className={style.SobreNos}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2>Sobre o projeto</h2>
            <p>
                Este To-Do List nasceu como projeto de estudo de React e evoluiu para um app completo de
                produtividade: prioridades, prazos, progresso, tema claro/escuro e reordenação por
                arrastar e soltar, tudo persistido localmente no navegador.
            </p>

            <div className={style.grade}>
                <div className={style.card}>
                    <Layers size={20} />
                    <h3>Arquitetura</h3>
                    <p>Context API + hooks customizados, componentes isolados com CSS Modules e camada de serviços.</p>
                </div>
                <div className={style.card}>
                    <Sparkles size={20} />
                    <h3>Interações</h3>
                    <p>Animações com Framer Motion e reordenação de tarefas com dnd-kit.</p>
                </div>
                <div className={style.card}>
                    <Palette size={20} />
                    <h3>Design</h3>
                    <p>Tema claro/escuro com transições suaves e uma paleta consistente em todo o app.</p>
                </div>
            </div>

            <div className={style.stack}>
                {TECNOLOGIAS.map((tecnologia) => (
                    <span key={tecnologia} className={style.badge}>
                        {tecnologia}
                    </span>
                ))}
            </div>

            <a
                className={style.link}
                href="https://github.com/yurisouzaadev"
                target="_blank"
                rel="noreferrer"
            >
                <Github size={16} /> yurisouzaadev no GitHub
            </a>
        </motion.div>
    );
};

export { SobreNos };

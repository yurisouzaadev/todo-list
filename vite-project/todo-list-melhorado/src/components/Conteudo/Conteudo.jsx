import style from './Conteudo.module.css';

const Conteudo = (props) => {
    const { children } = props;

    return <main className={style.Conteudo}>{children}</main>;
};

export { Conteudo };

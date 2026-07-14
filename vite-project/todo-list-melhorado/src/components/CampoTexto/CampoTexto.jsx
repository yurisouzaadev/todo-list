import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
    const { className = '', ...outrasProps } = props;

    return <input type="text" className={`${style.CampoTexto} ${className}`} {...outrasProps} />;
};

export { CampoTexto };

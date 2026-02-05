import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
    return (
        <input type = "text" 
        className={style.CampoTexto} 
        {...props} 
        />
    );
};


export { CampoTexto };
import { TIPOBOTAO } from "./constants";    
import style from './Botao.module.css';

const Botao = (props) => {
  const { texto, tipo = "submit", ...outrasProps } = props;

  return (
    <button
      className={style.Botao}
      tipo={tipo}
      {...outrasProps}
    >
      {texto}
    </button>
  );
};

export { Botao };

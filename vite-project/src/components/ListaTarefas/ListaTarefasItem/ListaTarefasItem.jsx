import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, CampoTexto, TIPOBOTAO } from "../../../components";
import style from './ListaTarefasItem.module.css';
import { Loading } from "../../Loading";

const ListaTarefasItem = (props) => {
    const { id, nome} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {loadingEditar, loadingDeletar, editarTarefa,removerTarefa } = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;
    
    
        editarTarefa(id, nomeTarefa);
        setEstaEditando(false);
    };

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    

    return (
         <li className={style.ListaTarefasItem}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto 
                defaultValue={nome}

                onBlur = {onBlurTarefa} 
                autoFocus
                  />

            )}
            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}> {nome} </span>
            )}

            {loadingEstaEditando && (
                <Loading />)}
          
            <Botao texto={loadingEstaDeletando ? <Loading /> : '-'} 
            tipo={TIPOBOTAO.SECUNDARIO} 
            onClick={() => removerTarefa(id)}
            />

            </li>
    );
};
export { ListaTarefasItem };
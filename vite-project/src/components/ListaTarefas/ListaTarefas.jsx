import { useAppContext } from '../../hooks';
import { ListaTarefasItem } from './ListaTarefasItem';
import style from './ListaTarefas.module.css';

import { Loading } from "../Loading";
const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext();
    return(
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>Carregando... <Loading /> </p>
            )}
            
            
            {!loadingCarregar && !tarefas.length &&(
                <p>Nenhuma tarefa Cadastrada</p>
            )}
            
            {tarefas.map(item => 
            <ListaTarefasItem
             key = {item.id} 
             id = {item.id} 
             nome={item.nome} />)}
        </ul>
    )
};

export { ListaTarefas };
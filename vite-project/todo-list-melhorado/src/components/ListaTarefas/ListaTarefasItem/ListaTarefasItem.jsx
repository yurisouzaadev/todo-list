import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { Check, GripVertical, Pencil, Trash2 } from 'lucide-react';

import { useAppContext } from '../../../hooks';
import { CampoTexto } from '../../../components';
import { PRIORIDADE_INFO } from '../../../constants';
import { formatarData, statusPrazo } from '../../../utils';
import { Loading } from '../../Loading';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
    const { tarefa, arrastavel } = props;
    const { id, nome, concluida, prioridade, dataEntrega } = tarefa;

    const [estaEditando, setEstaEditando] = useState(false);

    const { loadingEditar, loadingDeletar, editarTarefa, removerTarefa, alternarConclusao } = useAppContext();

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
        disabled: !arrastavel,
    });

    const estiloArraste = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value.trim();
        if (nomeTarefa && nomeTarefa !== nome) {
            editarTarefa(id, nomeTarefa);
        }
        setEstaEditando(false);
    };

    const loadingEstaEditando = loadingEditar === id;
    const loadingEstaDeletando = loadingDeletar === id;
    const prazo = statusPrazo(dataEntrega);
    const infoPrioridade = PRIORIDADE_INFO[prioridade] ?? PRIORIDADE_INFO.media;

    return (
        <li
            ref={setNodeRef}
            style={estiloArraste}
            className={style.ListaTarefasItem}
            data-arrastando={isDragging}
        >
            <motion.div
                className={style.inner}
                data-concluida={concluida}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.2 }}
            >
                {arrastavel && (
                    <button
                        type="button"
                        className={style.alcaArraste}
                        {...attributes}
                        {...listeners}
                        aria-label="Reordenar tarefa"
                    >
                        <GripVertical size={16} />
                    </button>
                )}

                <button
                    type="button"
                    className={style.checkbox}
                    data-concluida={concluida}
                    onClick={() => alternarConclusao(id)}
                    aria-label={concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
                >
                    {concluida && <Check size={14} strokeWidth={3} />}
                </button>

                <div className={style.corpo}>
                    {loadingEstaEditando || estaEditando ? (
                        <CampoTexto defaultValue={nome} onBlur={onBlurTarefa} autoFocus />
                    ) : (
                        <span className={style.nome} data-concluida={concluida} onDoubleClick={() => setEstaEditando(true)}>
                            {nome}
                        </span>
                    )}

                    <div className={style.metadados}>
                        <span className={style.badgePrioridade} style={{ '--cor-prioridade': infoPrioridade.cor }}>
                            {infoPrioridade.label}
                        </span>
                        {dataEntrega && (
                            <span className={style.badgeData} data-prazo={prazo}>
                                {formatarData(dataEntrega)}
                            </span>
                        )}
                    </div>
                </div>

                {loadingEstaEditando && <Loading />}

                <div className={style.acoes}>
                    {!estaEditando && !loadingEstaEditando && (
                        <button
                            type="button"
                            className={style.botaoIcone}
                            onClick={() => setEstaEditando(true)}
                            aria-label="Editar tarefa"
                        >
                            <Pencil size={15} />
                        </button>
                    )}
                    <button
                        type="button"
                        className={`${style.botaoIcone} ${style.perigo}`}
                        onClick={() => removerTarefa(id)}
                        aria-label="Remover tarefa"
                        disabled={loadingEstaDeletando}
                    >
                        {loadingEstaDeletando ? <Loading /> : <Trash2 size={15} />}
                    </button>
                </div>
            </motion.div>
        </li>
    );
};

export { ListaTarefasItem };

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { AnimatePresence } from 'framer-motion';
import { ClipboardList, PartyPopper } from 'lucide-react';

import { useAppContext } from '../../hooks';
import { FILTRO } from '../../constants';
import { ListaTarefasItem } from './ListaTarefasItem';
import { Loading } from '../Loading';
import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const { tarefas, tarefasFiltradas, filtro, loadingCarregar, reordenarTarefas } = useAppContext();

    const sensores = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
    const arrastavel = filtro === FILTRO.TODAS;

    const aoFinalizarArraste = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const indiceAntigo = tarefas.findIndex((tarefa) => tarefa.id === active.id);
        const indiceNovo = tarefas.findIndex((tarefa) => tarefa.id === over.id);
        if (indiceAntigo === -1 || indiceNovo === -1) return;

        reordenarTarefas(arrayMove(tarefas, indiceAntigo, indiceNovo));
    };

    if (loadingCarregar) {
        return (
            <div className={style.estado}>
                <Loading />
                <span>Carregando tarefas...</span>
            </div>
        );
    }

    if (!tarefas.length) {
        return (
            <div className={style.estadoVazio}>
                <ClipboardList size={40} strokeWidth={1.5} />
                <p>Nenhuma tarefa cadastrada ainda.</p>
                <span>Adicione a primeira tarefa acima ☝️</span>
            </div>
        );
    }

    if (!tarefasFiltradas.length) {
        return (
            <div className={style.estadoVazio}>
                <PartyPopper size={40} strokeWidth={1.5} />
                <p>Nenhuma tarefa nesse filtro.</p>
                <span>Você está em dia por aqui!</span>
            </div>
        );
    }

    const lista = (
        <ul className={style.ListaTarefas}>
            <AnimatePresence initial={false}>
                {tarefasFiltradas.map((tarefa) => (
                    <ListaTarefasItem key={tarefa.id} tarefa={tarefa} arrastavel={arrastavel} />
                ))}
            </AnimatePresence>
        </ul>
    );

    if (!arrastavel) {
        return (
            <>
                <p className={style.avisoFiltro}>Volte para "Todas" para reordenar as tarefas.</p>
                {lista}
            </>
        );
    }

    return (
        <DndContext sensors={sensores} collisionDetection={closestCenter} onDragEnd={aoFinalizarArraste}>
            <SortableContext items={tarefasFiltradas.map((tarefa) => tarefa.id)} strategy={verticalListSortingStrategy}>
                {lista}
            </SortableContext>
        </DndContext>
    );
};

export { ListaTarefas };

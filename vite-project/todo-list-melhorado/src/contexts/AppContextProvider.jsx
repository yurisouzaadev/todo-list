import { useEffect, useMemo, useState } from 'react';

import { AppContext } from './AppContext';

import { obterTarefas, salvarTarefas, obterTema, salvarTema } from '../services';
import { gerarId } from '../utils';
import { FILTRO, PRIORIDADE } from '../constants';

// Pequeno atraso artificial para preservar os estados de loading da UI,
// mesmo trabalhando com localStorage (que é síncrono e instantâneo).
const atraso = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador] = useState('Souza');
    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState(FILTRO.TODAS);
    const [tema, setTema] = useState(obterTema);

    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingCarregar, setLoadingCarregar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(null);
    const [loadingDeletar, setLoadingDeletar] = useState(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-tema', tema);
        salvarTema(tema);
    }, [tema]);

    const alternarTema = () => {
        setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'));
    };

    const carregarTarefas = async () => {
        setLoadingCarregar(true);
        await atraso(500);
        setTarefas(obterTarefas());
        setLoadingCarregar(false);
    };

    useEffect(() => {
        // Carga única dos dados salvos ao montar o app (equivalente ao fetch inicial
        // que existia com a API). Não é um "espelhamento" de estado externo reativo,
        // por isso o setState aqui é intencional.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        carregarTarefas();
    }, []);

    const persistir = (novaLista) => {
        salvarTarefas(novaLista);
        return novaLista;
    };

    const adicionarTarefa = async (nomeTarefa, prioridade = PRIORIDADE.MEDIA, dataEntrega = null) => {
        setLoadingCriar(true);
        await atraso();

        const novaTarefa = {
            id: gerarId(),
            nome: nomeTarefa,
            concluida: false,
            prioridade,
            dataEntrega: dataEntrega || null,
            criadaEm: Date.now(),
        };

        setTarefas((estadoAtual) => persistir([...estadoAtual, novaTarefa]));
        setLoadingCriar(false);
    };

    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa);
        await atraso();

        setTarefas((estadoAtual) => {
            const tarefasAtualizadas = estadoAtual.filter((tarefa) => tarefa.id !== idTarefa);
            return persistir([...tarefasAtualizadas]);
        });

        setLoadingDeletar(null);
    };

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa);
        await atraso();

        setTarefas((estadoAtual) => {
            const tarefasAtualizadas = estadoAtual.map((tarefa) =>
                tarefa.id === idTarefa ? { ...tarefa, nome: nomeTarefa } : tarefa
            );
            return persistir([...tarefasAtualizadas]);
        });

        setLoadingEditar(null);
    };

    const alternarConclusao = (idTarefa) => {
        setTarefas((estadoAtual) => {
            const tarefasAtualizadas = estadoAtual.map((tarefa) =>
                tarefa.id === idTarefa ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            );
            return persistir([...tarefasAtualizadas]);
        });
    };

    const reordenarTarefas = (novaOrdem) => {
        setTarefas(persistir(novaOrdem));
    };

    // A ordem visual das tarefas é controlada pelo drag-and-drop (reordenarTarefas),
    // então aqui só filtramos, sem reordenar por conta própria.
    const tarefasFiltradas = useMemo(() => {
        if (filtro === FILTRO.PENDENTES) return tarefas.filter((t) => !t.concluida);
        if (filtro === FILTRO.CONCLUIDAS) return tarefas.filter((t) => t.concluida);
        return tarefas;
    }, [tarefas, filtro]);

    const totalConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
    const progresso = tarefas.length ? Math.round((totalConcluidas / tarefas.length) * 100) : 0;

    return (
        <AppContext.Provider
            value={{
                criador,
                tarefas,
                tarefasFiltradas,
                filtro,
                setFiltro,
                tema,
                alternarTema,
                adicionarTarefa,
                removerTarefa,
                editarTarefa,
                alternarConclusao,
                reordenarTarefas,
                loadingCarregar,
                loadingCriar,
                loadingEditar,
                loadingDeletar,
                totalConcluidas,
                progresso,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

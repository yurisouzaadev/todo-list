const CHAVE_TAREFAS = '@todolist:tarefas';
const CHAVE_TEMA = '@todolist:tema';

export const obterTarefas = () => {
    try {
        const dados = localStorage.getItem(CHAVE_TAREFAS);
        return dados ? JSON.parse(dados) : [];
    } catch {
        return [];
    }
};

export const salvarTarefas = (tarefas) => {
    try {
        localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
    } catch {
        // localStorage indisponível (modo privado, quota etc). Falha silenciosa.
    }
};

export const obterTema = () => {
    try {
        return localStorage.getItem(CHAVE_TEMA) || 'claro';
    } catch {
        return 'claro';
    }
};

export const salvarTema = (tema) => {
    try {
        localStorage.setItem(CHAVE_TEMA, tema);
    } catch {
        // ignora
    }
};

export const PRIORIDADE = Object.freeze({
    BAIXA: 'baixa',
    MEDIA: 'media',
    ALTA: 'alta',
});

export const PRIORIDADE_INFO = Object.freeze({
    [PRIORIDADE.BAIXA]: { label: 'Baixa', cor: 'var(--verde)' },
    [PRIORIDADE.MEDIA]: { label: 'Média', cor: 'var(--amarelo)' },
    [PRIORIDADE.ALTA]: { label: 'Alta', cor: 'var(--rosa)' },
});

export const ORDEM_PRIORIDADE = Object.freeze({
    [PRIORIDADE.ALTA]: 0,
    [PRIORIDADE.MEDIA]: 1,
    [PRIORIDADE.BAIXA]: 2,
});

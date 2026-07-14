export const formatarData = (dataISO) => {
    if (!dataISO) return null;
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
};

const iniciarDia = (data) => {
    const nova = new Date(data);
    nova.setHours(0, 0, 0, 0);
    return nova;
};

export const statusPrazo = (dataISO) => {
    if (!dataISO) return null;

    const hoje = iniciarDia(new Date());
    const entrega = iniciarDia(new Date(`${dataISO}T00:00:00`));
    const diffDias = Math.round((entrega - hoje) / (1000 * 60 * 60 * 24));

    if (diffDias < 0) return 'atrasada';
    if (diffDias === 0) return 'hoje';
    return 'futura';
};

import { useState } from 'react';
import { Plus } from 'lucide-react';

import { Botao, CampoTexto, Loading } from '../../components';
import { useAppContext } from '../../hooks';
import { PRIORIDADE, PRIORIDADE_INFO } from '../../constants';
import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = useAppContext();
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [prioridade, setPrioridade] = useState(PRIORIDADE.MEDIA);
    const [dataEntrega, setDataEntrega] = useState('');

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value);
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if (!nomeTarefa.trim()) {
            return;
        }

        adicionarTarefa(nomeTarefa.trim(), prioridade, dataEntrega || null);

        setNomeTarefa('');
        setPrioridade(PRIORIDADE.MEDIA);
        setDataEntrega('');
    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <div className={style.linhaPrincipal}>
                <CampoTexto
                    placeholder="O que você precisa fazer?"
                    value={nomeTarefa}
                    onChange={onChangeNomeTarefa}
                />
                <Botao texto={loadingCriar ? <Loading /> : <Plus size={18} />} disabled={loadingCriar} />
            </div>

            <div className={style.linhaOpcoes}>
                <div className={style.prioridades}>
                    {Object.values(PRIORIDADE).map((valor) => (
                        <button
                            key={valor}
                            type="button"
                            className={style.prioridade}
                            data-ativo={prioridade === valor}
                            style={{ '--cor-prioridade': PRIORIDADE_INFO[valor].cor }}
                            onClick={() => setPrioridade(valor)}
                        >
                            {PRIORIDADE_INFO[valor].label}
                        </button>
                    ))}
                </div>

                <input
                    type="date"
                    className={style.data}
                    value={dataEntrega}
                    onChange={(event) => setDataEntrega(event.currentTarget.value)}
                    aria-label="Data de entrega"
                />
            </div>
        </form>
    );
};

export { FormCriarTarefa };

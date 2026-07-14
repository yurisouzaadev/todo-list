import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape} from '../../components';
import { useAppContext } from '../../hooks';

const LayoutPadrao = () => {
    const { criador } = useAppContext();

return (
      <>
      <Cabecalho nomeUsuario="Yuri" />
  <Conteudo>
    <Outlet />
    </Conteudo>
    <Rodape criador={criador} />
    </>
);
};

export { LayoutPadrao };
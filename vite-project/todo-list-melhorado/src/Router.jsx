import { Routes, Route } from 'react-router-dom';

import {Inicial, SobreNos} from './pages';
import { LayoutPadrao } from './layouts';
import { NotFound } from './pages/NotFound/NotFound';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
             <Route path="*" element={<NotFound />} />
         </Route>
        </Routes>
    );
};


export { Router };

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Rodape from './components/Rodape';
import Inicio from './paginas/Inicio';
import NotFound from './paginas/NotFound';
import Posts from './paginas/Posts';
import Sobremim from './paginas/Sobremim';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path='sobremim' element={<Sobremim />} />
                </Route>

                <Route path='posts/:id' element={<Posts />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;

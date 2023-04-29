import { Outlet } from 'react-router-dom';
import Banner from '../Banner'

function PaginaPadrao() {
    return ( 
        <main>
            <Banner />
            <Outlet />
        </main>
     );
}

export default PaginaPadrao;
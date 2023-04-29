import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

function Menu() {
    return (
        <header className={styles.navegacao}>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    );
}

export default Menu;
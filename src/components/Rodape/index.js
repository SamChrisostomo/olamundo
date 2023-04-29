import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from "../../assets/marca_registrada.svg"

function Rodape() {
        return (
            <footer className={styles.rodape}>
                <MarcaRegistrada />
                Desenvolvido por Samuel Crisóstomo
            </footer>
        );
    }

export default Rodape;
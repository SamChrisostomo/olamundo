import styles from './NotFound.module.css'
import imagemCachorro from '../../assets/erro_404.png'
import GlobalButton from '../../components/GlobalButton'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <spam className={styles.texto404}>404</spam>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                    <GlobalButton size="lg">Voltar</GlobalButton>
                </div>
                <img
                    src={imagemCachorro}
                    className={styles.imagemCachorro}
                    alt="Imagem de cachorro usando oculos e vestido como um humano."
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    );
}

export default NotFound;
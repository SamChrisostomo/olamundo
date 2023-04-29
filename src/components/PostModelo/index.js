import styles from './PostModelo.module.css';

function PostModelo({ children, fotoCapa, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >
            </div>
            <h3 className={styles.titulo}>
                {titulo}
            </h3>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    );
}

export default PostModelo;
import styles from './GlobalButton.module.css'

function GlobalButton({ children, size }) {
    return (
        <button className={`
            ${styles.globalButton}
            ${styles[size]}
        `}>
            {children}
        </button>
    );
}

export default GlobalButton;
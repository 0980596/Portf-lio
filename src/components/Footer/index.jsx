import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.sideLeft} aria-hidden="true"></div>
            <div className={styles.footer}>
                <p>@ 2026 Pedro Amancio</p>
                <p>Construído com React</p>
            </div>
            <div className={styles.sideRight} aria-hidden="true"></div>
        </footer>
    )
}
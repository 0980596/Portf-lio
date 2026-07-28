import styles from "./styles.module.css";

export default function About() {
    return (
        <>
            <div className={styles.aboutC} id="sobre">

                <div className={styles.aboutdiv}>

                    <div className={styles.tittle}>
                        <span>01</span>
                        <h2>sobre</h2>
                    </div>

                    <div className={styles.abouttext}>
                        <p>Formando em Sistemas para a Internet, com + 2 anos de experiência em desenvolvimento web. Nas horas vagas, estudo Web Pentesting, Vulnerability Analysis e arquitetura de sistemas.</p>

                        <p>Tenho interesse em desenvolvimento full stack, segurança de aplicações e arquitetura de sistemas, áreas nas quais continuo estudando diariamente.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}
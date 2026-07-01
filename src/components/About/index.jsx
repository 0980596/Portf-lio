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
                        <p>Eu escrevo software que é realmente entregue e usado. Meu trabalho abrange ferramentas para desenvolvedores e infraestrutura web em geral, utilizo ferramenas para design web como figma, jitter e canva.</p>

                        <p>Eu desenvolvo em React - HTML/CSS/JS, Python, C, PHP e contribuo para projetos de código aberto que as pessoas realmente utilizam.</p>
                    </div>

                </div>

            </div>
        </>
    )
}
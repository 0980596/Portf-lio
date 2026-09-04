import styles from "./styles.module.css";

export default function Stack() {
    return (
        <>
            <div className={styles.spaceStack} id="stack">

                <div className={styles.container}>

                    <div className={styles.tittleStack}>
                        <span>03</span>
                        <h2>stack</h2>
                    </div>

                    <div className={styles.skillgroup}>

                        <div className={styles.skill}>
                            <h2>Frontend && Backend</h2>
                            <div className={styles.skillItem}>
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>TypeScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>MySQL</span>
                                <span>SQLite</span>
                                <span>Python</span>
                                <span>C</span>
                                {/* <span>PHP</span> */}
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <h2>Ferramentas && Infraestrutura</h2>
                            <div className={styles.skillItem}>
                                <span>Burp Suite</span>
                                <span>Insomnia</span>
                                <span>GitHub</span>
                                <span>Linux</span>
                                <span>Vercel</span>
                                <span>Git</span>
                                {/* <span>Docker</span>
                                <span>GitHub Actions</span> */}
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <h2>Design</h2>
                            <div className={styles.skillItem}>
                                <span>Figma</span>
                                <span>Jitter</span>
                                <span>Canva</span>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}
import styles from "./styles.module.css";

export default function Stack() {
    return (
        <>
            <div className={styles.spaceStack} id="stack">

                <div className={styles.container}>

                    <div className={styles.tittleStack}>
                        <span>04</span>
                        <h2>stack</h2>
                    </div>

                    <div className={styles.skillgroup}>

                        <div className={styles.skill}>
                            <h2>Languages</h2>
                            <div className={styles.skillItem}>
                                <span>JavaScript</span>
                                <span>Python</span>
                                <span>PHP</span>
                                <span>C</span>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <h2>Frontend</h2>
                            <div className={styles.skillItem}>
                                <span>React</span>
                                <span>HTML/CSS</span>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <h2>Backend e ferramentas</h2>
                            <div className={styles.skillItem}>
                                {/* <span>FastAPI</span> */}
                                <span>Git</span>
                                <span>MySQL</span>
                                <span>Insomnia</span>
                                <span>Figma</span>
                            </div>
                        </div>

                        <div className={styles.skill}>
                            <h2>Infraestrutura</h2>
                            <div className={styles.skillItem}>
                                <span>Linux</span>
                                <span>Vercel</span>

                                {/* <span>Docker</span>
                                <span>GitHub Actions</span> */}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
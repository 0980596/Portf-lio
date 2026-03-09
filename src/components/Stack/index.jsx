import style from "./style.module.css";

export default function Stack() {
    return (
        <>
            <div className={style.spaceStack} id="stack">

                <div className={style.container}>

                    <div className={style.tittleStack}>
                        <span>04</span>
                        <h2>stack</h2>
                    </div>

                    <div className={style.skillgroup}>

                        <div className={style.skill}>
                            <h2>Languages</h2>
                            <div className={style.skillItem}>
                                <span>JavaScript</span>
                                <span>Python</span>
                                <span>PHP</span>
                                <span>C</span>
                            </div>
                        </div>

                        <div className={style.skill}>
                            <h2>Frontend</h2>
                            <div className={style.skillItem}>
                                <span>React</span>
                                <span>HTML/CSS</span>
                            </div>
                        </div>

                        <div className={style.skill}>
                            <h2>Backend e ferramentas</h2>
                            <div className={style.skillItem}>
                                <span>FastAPI</span>
                                <span>Git</span>
                                <span>MySQL</span>
                                <span>Insomnia</span>
                                <span>Figma</span>
                            </div>
                        </div>

                        <div className={style.skill}>
                            <h2>Infraestrutura</h2>
                            <div className={style.skillItem}>
                                <span>Linux</span>
                                <span>Vercel</span>

                                <span>Docker</span>
                                <span>GitHub Actions</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
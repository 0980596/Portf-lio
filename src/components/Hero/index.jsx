import styles from "./styles.module.css";

export default function Hero() {

    const links = [
        {
            name: "mail",
            link: "mailto:pedro000y@gmail.com"
        },
        {
            name: "github",
            link: "https://github.com/0980596"
        },
        {
            name: "linkdin",
            link: "https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/"
        }
    ]

    return (
        <>
            <div className={styles.heroC}>

                <div className={styles.herodiv}>
                    <div className={styles.herome}>
                        <div className={styles.student}>
                            <h3>estudante</h3>
                        </div>

                        <div className={styles.name}>
                            <h1>Dev</h1>
                            <h1>Pedro</h1>
                        </div>

                        <p>Eu crio ferramentas para desenvolvedores, sites para clientes e infraestrutura de código aberto.</p>

                        <div className={styles.herobtn}>
                            {links.map((links, index) => (
                                <div className={styles.btnlink} key={index}>
                                    <a href={links.link} target="_blank" rel="noreferrer">{links.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.code}>

                </div>

            </div>
        </>
    )
}
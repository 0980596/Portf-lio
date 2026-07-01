import styles from "./styles.module.css";

export default function Building() {

    const currentlybuilding = [
        {
            name: "Code-core",
            desc: "Otimização do CodeCore para lidar com grandes bibliotecas de componentes. Focada em facilitar organização e reutilização."
        },
        {
            name: "CyberSec na web",
            desc: "Aprendizado de cibersegurança na web para projetar aplicações mais seguras. Focado na proteção de usuários e sistemas."
        }
    ]

    return (
        <>
            <div className={styles.container} id="construindo">

                <div className={styles.Building}>

                    <div className={styles.tittleB}>
                        <span>05</span>
                        <h2>atualmente construindo</h2>
                    </div>

                    <div className={styles.buildinglist}>

                        {currentlybuilding.map((building, index) => (
                            <div className={styles.builditem} key={index}>
                                <div className={styles.buildingStatus}>
                                    <span className={styles.statusdot}></span>
                                </div>

                                <div className={styles.buildingInf}>
                                    <h2>{building.name}</h2>
                                    <p>{building.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className={styles.builditemtwo}>
                            <div className={styles.buildingStatus}>
                                <span className={styles.statusdot}></span>
                            </div>

                            <div className={styles.buildingInf}>
                                <h2>Estudo</h2>
                                <p>Estudo de diferentes linguagens de programação para ampliar conhecimentos. Focado em aprendizado contínuo e aprimoramento técnico.</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
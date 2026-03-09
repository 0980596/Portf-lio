import style from "./style.module.css";

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
            <div className={style.container} id="construindo">

                <div className={style.Building}>

                    <div className={style.tittleB}>
                        <span>05</span>
                        <h2>atualmente construindo</h2>
                    </div>

                    <div className={style.buildinglist}>

                        {currentlybuilding.map((building, index) => (
                            <div className={style.builditem} key={index}>
                                <div className={style.buildingStatus}>
                                    <span className={style.statusdot}></span>
                                </div>

                                <div className={style.buildingInf}>
                                    <h2>{building.name}</h2>
                                    <p>{building.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className={style.builditemtwo}>
                            <div className={style.buildingStatus}>
                                <span className={style.statusdot}></span>
                            </div>

                            <div className={style.buildingInf}>
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
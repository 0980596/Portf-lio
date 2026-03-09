import style from "./style.module.css";

import { useState } from "react";

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
            <div className={style.heroC}>

                <div className={style.herodiv}>
                    <div className={style.herome}>
                        <div className={style.student}>
                            <h3>estudante</h3>
                        </div>

                        <div className={style.name}>
                            <h1>Dev</h1>
                            <h1>Pedro</h1>
                        </div>

                        <p>Eu crio ferramentas para desenvolvedores, sites para clientes e infraestrutura de código aberto.</p>

                        <div className={style.herobtn}>
                            {links.map((links, index) => (
                                <div className={style.btnlink} key={index}>
                                    <a target="_blank" href={links.link}>{links.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={style.code}>

                </div>

            </div>
        </>
    )
}
import { Github, Linkedin, Mail } from "lucide-react";
import style from "./style.module.css";

export default function Hero() {
    return (
        <>
            <div className={style.hero} id="inicio">

                <p>Olá, eu sou</p>

                <h2>Pedro Amancio</h2>

                <h3>Desenvolvedor Web & Mobile Iniciante</h3>

                <p>Sou <span>iniciante</span>, mas apaixonado por transformar ideias em experiências digitais que funcionam de verdade. Trabalho com <span>React.js e React Native</span>, criando <span>apps e sites rápidos, responsivos e intuitivos</span>. Meu foco é entregar <span>interfaces claras, código limpo e soluções que realmente fazem diferença</span>.</p>

                <div className={style.btnInicio}>

                    <div className={style.verProjeto}>
                        <a href="#projetos"><button>Ver Projetos</button></a>
                    </div>

                    <div className={style.entreContato}>
                        <a href="#contato"><button>Entre em Contato</button></a>
                    </div>

                </div>

                <div className={style.redes}>

                    <div className={style.social}>
                        <a href="https://github.com/0980596"><Github /></a>
                    </div>

                    <div className={style.social}>
                        <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/"><Linkedin /></a>
                    </div>

                    <div className={style.social}>
                        <Mail />
                    </div>

                </div>

            </div>
        </>
    );
}
import { ArrowUpRight, Star } from "lucide-react";
import style from "./style.module.css";

export default function Projects() {

    const projects = [
        {
            tech: "JSON | VS Code API ",
            name: "CleanCode Dark",
            desc: "Extensão de tema para VS Code criada para oferecer uma identidade visual moderna, organizada e agradável durante o desenvolvimento.",
            sourc: "https://marketplace.visualstudio.com/items?itemName=pedroamancio.cleancode-dark",
            live: "https://github.com/0980596/estencao-color"
        },
        {
            tech: "react",
            name: "Quiz dev",
            desc: "Quiz para desenvolvedores com perguntas de múltiplos níveis de dificuldade para testar conhecimentos em programação.",
            sourc: "https://github.com/0980596/quiz",
            live: "https://quiz-smoky-iota.vercel.app/"
        },
        {
            tech: "react",
            name: "UI Color Lab",
            desc: "Ferramenta para desenvolvedores e designers que ajuda a escolher cores para diferentes elementos da interface, facilitando a criação de UIs mais clean e agradáveis.",
            sourc: "https://github.com/0980596/Ui-color-Lab",
            live: "https://ui-color-lab.vercel.app/"
        }
    ]

    return (
        <>
            <div className={style.space} id="projetos">
                <div className={style.containerProjects}>

                    <div className={style.tittleDestaque}>
                        <span>03</span>
                        <h2>trabalho em destaque</h2>
                    </div>

                    <div className={style.gridWork}>

                        <div className={style.cardwork}>

                            <div className={style.nameestar}>
                                <h2>Featured</h2>
                                <span><Star /> 0</span>
                            </div>

                            <h3>Inventory</h3>

                            <p>Controlador de estoque para inventários desenvolvido em React. Gerencia produtos e categorias com opções de cadastro e edição, oferecendo uma interface simples para organização e controle de estoque.</p>

                            <div className={style.techWork}>
                                <span>react</span>
                            </div>

                            <div className={style.linksWork}>
                                <a target="_blank" rel="noreferrer" href="https://github.com/0980596/Inventory">View source<ArrowUpRight /></a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/0980596/Inventory">Live<ArrowUpRight /></a>
                            </div>

                        </div>

                        <div className={style.cardwork}> {/* cardtwo */}

                            <div className={style.nameestar}>
                                <h2>Featured</h2>
                                <span><Star /> 0</span>
                            </div>

                            <h3>Code-core</h3>

                            <p>Biblioteca de componentes para desenvolvedores front-end. Fornece elementos reutilizáveis com design clean, minimalista e responsivo, focados em facilitar a construção de interfaces modernas e intuitivas.</p>

                            <div className={style.techWork}>
                                <span>react</span>
                            </div>

                            <div className={style.linksWork}>
                                <a target="_blank" rel="noreferrer" href="https://github.com/0980596/CodeCore">View source<ArrowUpRight /></a>
                                <a target="_blank" rel="noreferrer" href="https://code-core-wheat.vercel.app/">Live<ArrowUpRight /></a>
                            </div>

                        </div> {/* cardtwo */}

                    </div>

                    <div className={style.tittleProjects}>
                        <h2>projetos selecionados</h2>
                    </div>

                    <div className={style.project}>
                        {projects.map((project, index) => (
                            <div className={style.techProject} key={index}>
                                <span>{project.tech}</span>
                                <h3>{project.name}</h3>
                                <p>{project.desc}</p>
                                <div className={style.btnsProject}>
                                    <a target="_blank" rel="noreferrer" href={project.sourc}>source<ArrowUpRight /></a>
                                    <a target="_blank" rel="noreferrer" href={project.live}>live<ArrowUpRight /></a>
                                </div>
                            </div>
                        ))}
                        <div className={style.techProjecttwo} >
                            <span>next.js | react</span>
                            <h3>Digital Studio</h3>
                            <p>Landing page de alto impacto visual desenvolvida para oferecer uma experiência imersiva, com animações fluidas e interação baseada no scroll.</p>
                            <div className={style.btnsProject}>
                                <a target="_blank" rel="noreferrer" href="https://github.com/0980596/Digital-Studio">source<ArrowUpRight /></a>
                                <a target="_blank" rel="noreferrer" href="https://digital-studio-one.vercel.app/">live<ArrowUpRight /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

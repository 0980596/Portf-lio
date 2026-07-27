import { ArrowUpRight, Star } from "lucide-react";
import styles from "./styles.module.css";

export default function Projects() {

    const projectSelect = [
        {
            name: 'Inventory',
            desc: 'Controlador de estoque para inventários desenvolvido em React. Gerencia produtos e categorias com opções de cadastro e edição, oferecendo uma interface simples para organização e controle de estoque.',
            tec: 'react',
            sourc: 'https://github.com/0980596/Inventory',
            live: 'https://github.com/0980596/Inventory'
        },
        {
            name: 'Code-core',
            desc: 'Biblioteca de componentes para desenvolvedores front-end. Fornece elementos reutilizáveis com design clean, minimalista e responsivo, focados em facilitar a construção de interfaces modernas e intuitivas.',
            tec: 'react',
            sourc: 'https://github.com/0980596/CodeCore',
            live: 'https://code-core-wheat.vercel.app/'
        }
    ]

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
            <div className={styles.space} id="projetos">
                <div className={styles.containerProjects}>

                    <div className={styles.tittleDestaque}>
                        <span>03</span>
                        <h2>trabalho em destaque</h2>
                    </div>

                    <div className={styles.gridWork}>
                        {projectSelect.map((select, index) => (
                            <>
                                <div className={styles.cardwork}>
                                    <div className={styles.nameestar}>
                                        <h2>Featured</h2>
                                        <span><Star /> 0</span>
                                    </div>
                                    <h3>{select.name}</h3>
                                    <p>{select.desc}</p>
                                    <div className={styles.techWork}>
                                        <span>{select.tec}</span>
                                    </div>
                                    <div className={styles.linksWork}>
                                        <a target="_blank" rel="noreferrer" href={select.sourc}>View source<ArrowUpRight /></a>
                                        <a target="_blank" rel="noreferrer" href={select.live}>Live<ArrowUpRight /></a>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    <div className={styles.tittleProjects}>
                        <h2>projetos selecionados</h2>
                    </div>

                    <div className={styles.project}>
                        {projects.map((project, index) => (
                            <div className={styles.techProject} key={index}>
                                <span>{project.tech}</span>
                                <h3>{project.name}</h3>
                                <p>{project.desc}</p>
                                <div className={styles.btnsProject}>
                                    <a target="_blank" rel="noreferrer" href={project.sourc}>source<ArrowUpRight /></a>
                                    <a target="_blank" rel="noreferrer" href={project.live}>live<ArrowUpRight /></a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
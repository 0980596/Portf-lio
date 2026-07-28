import { ArrowUpRight, Star } from "lucide-react";
import styles from "./styles.module.css";

export default function Projects() {

    const projectSelect = [
        {

            name: 'Find yours components',
            desc: 'Biblioteca de componentes reutilizáveis para desenvolvimento de interfaces modernas. Desenvolvida em React (JSX + CSS Modules), disponibiliza um prompt para converter os componentes na tecnologia desejada.',
            tec: 'react',
            sourc: 'https://github.com/PedroAmancioDev/find-your-components',
            live: 'https://find-your-components.vercel.app/'
        },
        {
            name: 'Construindo',
            desc: '...',
            tec: '...',
            sourc: '',
            live: ''
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
            name: "LauroFX",
            desc: "Website para streamer com integração à Twitch e YouTube, exibindo status da live, miniaturas atualizadas automaticamente e informações sobre equipamentos, comandos e agenda de transmissões.",
            sourc: "https://laurofxgg.com.br/",
            live: "https://laurofxgg.com.br/"
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
import style from "./style.module.css";
import { useState } from "react";

import imgproject1 from "../../images/subs.avif";
import imgproject2 from "../../images/subs.avif";
import imgproject3 from "../../images/subs.avif";

import { Github, SquareArrowOutUpRight } from "lucide-react";

import { motion } from 'framer-motion'; 

export default function Projetos() {
    const [projetoAberto, setProjetoAberto] = useState(null);
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const projetos = [
        { id: 1, titulo: "E-commerce Platform", descricao: "Plataforma completa", imagem: imgproject1, sobre: "Detalhes do projeto", tecnologias: ["React", "Node.js"] },
        { id: 2, titulo: "E-commerce Platform", descricao: "Plataforma completa", imagem: imgproject2, sobre: "Detalhes do projeto", tecnologias: ["React", "Node.js"] },
        { id: 3, titulo: "E-commerce Platform", descricao: "Plataforma completa", imagem: imgproject3, sobre: "Detalhes do projeto", tecnologias: ["React", "Node.js"] },
        { id: 4, titulo: "Outro Projeto", descricao: "Outro projeto", imagem: imgproject1, sobre: "Detalhes do projeto", tecnologias: ["React"] },
        { id: 5, titulo: "Mais Um Projeto", descricao: "Mais um projeto", imagem: imgproject2, sobre: "Detalhes do projeto", tecnologias: ["Node.js"] },
        { id: 6, titulo: "Último Projeto", descricao: "Último projeto", imagem: imgproject3, sobre: "Detalhes do projeto", tecnologias: ["MongoDB"] },
    ];

    const projetosParaMostrar = mostrarTodos ? projetos : projetos.slice(0, 3);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={style.projetos} id="projetos">
                    <div className={style.introCard}>
                        <h2>Meus Projetos</h2>
                        <p>Aqui estão alguns projetos de design em que trabalhei. Quer ver mais? <span>Envie-me um e-mail</span>.</p>
                    </div>

                    <div className={style.cards}>
                        {projetosParaMostrar.map((projeto, index) => (
                            <motion.div
                                key={projeto.id}
                                className={style.card}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.15 }}
                            >
                                <img src={projeto.imagem} alt={projeto.titulo} />
                                <h3>{projeto.titulo}</h3>
                                <p>{projeto.descricao}</p>
                                <div className={style.verMais}>
                                    <button onClick={() => setProjetoAberto(projeto.id)}>Detalhes</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className={style.maisProjetos}>
                        <button onClick={() => setMostrarTodos(!mostrarTodos)}>
                            {mostrarTodos ? "Ver Menos" : "Ver Mais Projetos"}
                        </button>
                    </div>
                </div>
            </motion.div>

            {projetoAberto && (
                <div onClick={() => setProjetoAberto(null)} className={style.overlayProjeto}>
                    <div onClick={(e) => e.stopPropagation()} className={style.projetoContainer}>
                        {projetos.filter((p) => p.id === projetoAberto).map((p) => (
                            <div key={p.id} style={{ width: "100%" }}>
                                <div className={style.tttleinicio}>
                                    <h2>{p.titulo}</h2>
                                    <p>{p.descricao}</p>
                                </div>
                                <img src={p.imagem} alt={p.titulo} />
                                <div className={style.sobreProject}>
                                    <h3>Sobre o Projeto</h3>
                                    <p>{p.sobre}</p>
                                </div>
                                <div className={style.tecnologias}>
                                    <h3>Tecnologias Utilizadas</h3>
                                    <div className={style.divtecnologia}>
                                        {p.tecnologias.map((tech, idx) => <p key={idx}>{tech}</p>)}
                                    </div>
                                </div>
                                <div className={style.acesso}>
                                    <div className={style.verCod}>
                                        <button><Github size={20} /> Ver Código</button>
                                    </div>
                                    <div className={style.verProject}>
                                        <button><SquareArrowOutUpRight size={20} /> Ver Projeto</button>
                                    </div>
                                    <div className={style.fechar}>
                                        <button onClick={() => setProjetoAberto(null)}>Fechar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

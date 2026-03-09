import { Github, Moon, Sun } from "lucide-react";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function Header() {

    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") === "dark" //localStorage == salva dados no computador do usuario
    );

    useEffect(() => {
        // código que executa depois da renderização
        document.documentElement.classList.toggle("dark", dark); //documentElement é o elemento <html> da página //classList manipula css -- 
        // toggle pode add ou remover uma class
        // se dark = true  → adiciona classe // se dark = false → remove classe // exp: dark = true <html class="dark"> // dark = false <html>
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]); //rode esse efeito sempre que "dark" mudar 

    const toggleTheme = () => { setDark(true) };
    const tooglethemetwo = () => { setDark(false) };

    return (
        <>
            <div className={style.progressoBar}>
            </div>

            <header>

                <div className={style.heaerC}>
                    <div className={style.name}>
                        <span>Amancio</span>
                    </div>

                    <div className={style.divider}>
                        <hr />
                    </div>

                    <nav>
                        <a href="#sobre">Sobre</a>
                        <a href="#destaque">Destaques</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#stack">Stack</a>
                        <a href="#construindo">Construindo</a>
                        <a href="#contato">Contato</a>
                    </nav>

                    <div className={style.divider}>
                        <hr />
                    </div>

                    <div className={style.config}>
                        <Sun onClick={tooglethemetwo} />
                        <Moon onClick={toggleTheme} />
                        <a href="https://github.com/0980596" target="_blank" rel="noreferrer"><Github /></a>
                    </div>
                </div>

            </header>
        </>
    )
}
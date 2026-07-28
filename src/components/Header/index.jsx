import { Moon, Sun } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Header() {

    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;

            const bar = document.getElementById("progress-bar");
            if (bar) {
                bar.style.transform = `scaleX(${progress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => { setDark((prev) => !prev) };

    return (
        <>
            <div id="progress-bar" className={styles.progressoBar}>
            </div>

            <header className={styles.headerFrame}>
                <div className={styles.sideLeft} aria-hidden="true"></div>
                <div className={styles.sideRight} aria-hidden="true"></div>

                <div className={styles.navBar}>
                    <div className={styles.name}>
                        <span>Amancio</span>
                    </div>

                    <nav>
                        <a href="#sobre">Sobre</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#stack">Stack</a>
                        <a href="#contato">
                            <button>Contato</button>
                        </a>
                    </nav>

                    <div className={styles.config}>
                        {dark ? (
                            <Sun onClick={toggleTheme} />
                        ) : (
                            <Moon onClick={toggleTheme} />
                        )}
                        <a href="https://github.com/PedroAmancioDev" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </header>
        </>
    )
}
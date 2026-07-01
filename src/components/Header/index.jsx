import { Moon, Sun } from "lucide-react";
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
            const progress = scrollTop / docHeight;

            const bar = document.getElementById("progress-bar");
            if (bar) {
                bar.style.transform = `scaleX(${progress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => { setDark(true) };
    const tooglethemetwo = () => { setDark(false) };

    return (
        <>
            <div id="progress-bar" className={styles.progressoBar}>
            </div>

            <header>

                <div className={styles.heaerC}>
                    <div className={styles.name}>
                        <span>Amancio</span>
                    </div>

                    <div className={styles.divider}>
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

                    <div className={styles.divider}>
                        <hr />
                    </div>

                    <div className={styles.config}>
                        <Sun onClick={tooglethemetwo} />
                        <Moon onClick={toggleTheme} />
                        <a href="https://github.com/0980596" target="_blank" rel="noreferrer">GH</a>
                    </div>
                </div>

            </header>
        </>
    )
}
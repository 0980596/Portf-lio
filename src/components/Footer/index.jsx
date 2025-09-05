import { Github, Linkedin, Mail } from "lucide-react";
import style from "./style.module.css";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style.sobreMim}>
                    <h3>Pedro Amâncio</h3>
                    <div className={style.logos}>
                        <a href="https://github.com/0980596"><Github /></a>
                        <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/"><Linkedin /></a>
                        <Mail />
                    </div>
                </div>
                <div className={style.diretosreservados}>
                    <hr />
                    <p>© 2024 Pedro Amâncio. Todos os direitos reservados.</p>
                </div>

            </footer>
        </>
    );
}
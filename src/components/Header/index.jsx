import { Globe } from "lucide-react";
import style from "./style.module.css";

export default function Header() {
    return (
        <>
            <header>

                <div className={style.name}>
                    <h3>Amancio</h3>
                </div>

                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>

                <div className={style.idioma}>
                    <Globe size={16} />
                    <button>PT</button>
                </div>

            </header>
        </>
    );
}

// https://mattfarley.ca/
// https://iuricode.com/
// alt z
// braces

import { Github, Linkedin, Mail } from "lucide-react";
import style from "./style.module.css";

export default function Hero() {
    return (
        <>
            <div className={style.hero} id="inicio">

                <p>Olá, eu sou</p>

                <h2>Pedro Amancio</h2>

                <h3>Desenvolvedor Full Stack</h3>

                <p>Apaixonado por criar experiências digitais excepcionais e soluções inovadoras. Especializado em
                    desenvolvimento web moderno com foco em performance e usabilidade.</p>

                <div className={style.btnInicio}>

                    <div className={style.verProjeto}>
                        <button>Ver Projetos</button>
                    </div>

                    <div className={style.entreContato}>
                        <button>Entre em Contato</button>
                    </div>

                </div>

                <div className={style.redes}>

                    <div className={style.social}>
                        <Github />
                    </div>

                    <div className={style.social}>
                        <Linkedin />
                    </div>

                    <div className={style.social}>
                        <Mail />
                    </div>

                </div>

            </div>
        </>
    );
}
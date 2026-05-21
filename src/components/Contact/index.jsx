import style from "./style.module.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const [msg, setmsg] = useState("");

    function showMessage(txt) {
        setmsg(txt);

        setTimeout(() => {
            setmsg("")
        }, 4000) // 3 seg
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_pedroenviar", "template_sfzcc1p", form.current, {
                publicKey: "w-8DdyzcR8J10Ccw2",
            })
            .then(
                () => {
                    showMessage("Mensagem enviada com sucesso!");
                    form.current.reset();
                },
                (error) => {
                    showMessage(`Erro ao enviar mensagem + ${error}`);
                }
            );
    };

    return (
        <>
            <div className={style.spacing} id="contato">
                
                {msg && <div className={style.toast}>{msg}</div>}

                <div className={style.contactC}>

                    <div className={style.contacttittle}>
                        <span>06</span>
                        <h2>contato</h2>
                    </div>

                    <div className={style.contactSession}>
                        <div className={style.contactmy}>
                            <p>Estamos abertos a colaborações e serviços de consultoria. Entre em contato diretamente ou utilize o formulário ao lado.</p>
                            <div className={style.contactlinks}>
                                <a href="mailto:pedro000y@gmail.com" target="_blank" rel="noreferrer" >pedro000y@gmail.com</a>
                                <a href="https://github.com/0980596" target="_blank" rel="noreferrer">github.com/0980596</a>
                                <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/" target="_blank" rel="noreferrer">linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/</a>
                            </div>
                        </div>

                        <form onSubmit={sendEmail} ref={form} className={style.contactform}>
                            <div className={style.formgroup}>
                                <input type="text" placeholder="Seu nome" id="name" name="name" required />
                            </div>
                            <div className={style.formgroup}>
                                <input type="email" placeholder="Seu email" id="email" name="email" required />
                            </div>
                            <div className={style.formgroup}>
                                <textarea name="message" id="message" placeholder="Sua message" required></textarea>
                            </div>
                            <button type="submit">enviar mensagem</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

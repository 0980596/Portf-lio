import styles from "./styles.module.css";

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
            <div className={styles.spacing} id="contato">
                
                {msg && <div className={styles.toast}>{msg}</div>}

                <div className={styles.contactC}>

                    <div className={styles.contacttittle}>
                        <span>06</span>
                        <h2>contato</h2>
                    </div>

                    <div className={styles.contactSession}>
                        <div className={styles.contactmy}>
                            <p>Estamos abertos a colaborações e serviços de consultoria. Entre em contato diretamente ou utilize o formulário ao lado.</p>
                            <div className={styles.contactlinks}>
                                <a href="mailto:pedro000y@gmail.com" target="_blank" rel="noreferrer" >pedro000y@gmail.com</a>
                                <a href="https://github.com/PedroAmancioDev" target="_blank" rel="noreferrer">github.com/0980596</a>
                                <a href="https://www.linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/" target="_blank" rel="noreferrer">linkedin.com/in/pedro-am%C3%A2ncio-6bb579378/</a>
                            </div>
                        </div>

                        <form onSubmit={sendEmail} ref={form} className={styles.contactform}>
                            <div className={styles.formgroup}>
                                <input type="text" placeholder="Seu nome" id="name" name="name" required />
                            </div>
                            <div className={styles.formgroup}>
                                <input type="email" placeholder="Seu email" id="email" name="email" required />
                            </div>
                            <div className={styles.formgroup}>
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
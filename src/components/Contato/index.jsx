import { Mail, Phone } from "lucide-react";
import style from "./style.module.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pedroenviar", "template_sfzcc1p", form.current, {
        publicKey: "w-8DdyzcR8J10Ccw2",
      })
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset(); // limpa os campos depois do envio
        },
        (error) => {
          alert("Erro ao enviar: " + error.text);
        }
      );
  };

  return (
    <>
      <div className={style.entreemContatotittle} id="contato">
        <h2>Entre em Contato</h2>
        <p>
          Fique à vontade para entrar em contato comigo para qualquer oportunidade.
        </p>
      </div>

      <div className={style.infmsgContainer}>

        <div className={style.infdecontatoContainer}>

          <div className={style.tittleifn}>
            <h2>Informações de Contato</h2>
          </div>

          <div className={style.infcontactcontainer}>
            <div className={style.infcontact}>

              <Mail className={style.iconerede} />

              <div className={style.textinf}>
                <h2>Email</h2>
                <p>pedro000y@gmail.com</p>
              </div>

            </div>

            <div className={style.infcontact}>

              <Phone className={style.iconerede} />

              <div className={style.textinf}>
                <h2>Telefone</h2>
                <p>(16) 997425293</p>
              </div>

            </div>
          </div>

        </div>

        <div className={style.enviarMensagem}>
          <div className={style.tittleMsg}>
            <h2>Envie uma Mensagem</h2>
            <p>Preencha o formulário abaixo e entrarei em contato</p>
          </div>

          <div className={style.campos}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={style.campoName}>
                <label htmlFor="name">Seu nome</label>
                <input type="text" placeholder="Digite seu nome" id="name" name="name" required />
              </div>

              <div className={style.campoEmail}>
                <label htmlFor="email">Seu e-mail</label>
                <input type="email" placeholder="Digite seu e-mail" id="email" name="email" required />
              </div>

              <div className={style.campoAssunto}>
                <label htmlFor="subject">Seu assunto</label>
                <input type="text" placeholder="Digite seu Assunto" id="subject" name="subject" required />
              </div>

              <div className={style.campoMensagem}>
                <label htmlFor="message">Sua mensagem</label>
                <textarea name="message" id="message" placeholder="Digite sua mensagem" required></textarea>
              </div>

              <div className={style.btnEnviar}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

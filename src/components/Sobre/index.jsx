import style from "./style.module.css";

export default function Sobre() {
    return (
        <>
            <div className={style.quemsouContainer} id="sobre">

                <div className={style.tittleSub}>
                    <h3>QUEM SOU</h3>
                    <h2>Sobre mim</h2>
                </div>

                <div className={style.desc}>

                    <h3>Transformamos ideias em experiências digitais</h3>

                    <p>Acreditamos que <span>tecnologia e design caminham juntos para impulsionar negócios</span> e conectar
                        marcas ao seu público de forma autêntica.</p>

                    <p>Nossa missão é <span>simplificar processos complexos e entregar soluções digitais</span> que unem
                        estética, performance e usabilidade. Cada detalhe é pensado para valorizar sua marca e criar interfaces
                        que encantam.</p>

                    <p>Mais do que desenvolver, ajudamos sua marca a ganhar voz, traduzindo visão e valores em uma presença
                        digital única e marcante.</p>

                </div>

            </div>
        </>
    );
}
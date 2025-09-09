import style from "./style.module.css";

export default function Sobre() {
    return (
        <>
            <div className={style.quemsouContainer} id="sobre">

                <div className={style.tittleSub}>
                    <h3>HABILIDADES</h3>
                    <h2>Sobre mim</h2>
                </div>

                <div className={style.desc}>

                    <h3>Competências em desenvolvimento</h3>

                    <p>Tenho habilidades em <span>React.js </span>e <span>React Native</span>, desenvolvendo aplicações web <span>responsivas</span> com <span>componentes reutilizáveis</span> e criando interfaces <span>intuitivas e funcionais</span>, sempre mantendo o código limpo e organizado.</p>

                    <p>Tenho conhecimento em <span>MySQL</span> e no uso de <span>JSON</span> para organizar e manipular dados de forma eficiente, além de experiência em integrar <span>APIs</span>, conectando front-end e back-end de maneira <span>segura e prática.</span></p>

                    <p>Estou sempre buscando <span>aprender mais, corrigir falhas e aplicar melhorias,</span> evoluindo constantemente como desenvolvedor.</p>

                </div>

            </div>
        </>
    );
}
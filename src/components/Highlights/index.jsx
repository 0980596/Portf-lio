import style from "./style.module.css";

export default function Highlights() {

    const infcard = [
        {
            name: "20+",
            desc: "Componentes UI público."
        },
        {
            name: "5+",
            desc: "Tecnologias dominadas."
        },
        {
            name: "10+",
            desc: "Repositórios listados público no GitHub."
        },
        {
            name: "2+",
            desc: "Anos dentro da área."
        },
        {
            name: "150+",
            desc: "Commits em projetos."
        },
        {
            name: "Top 8",
            desc: "Alunos do SENAI na unidade."
        },
    ]

    return (
        <>
            <div className={style.containerhig} id="destaque">
                <div className={style.highlightsC}>

                    <div className={style.highlightstittle}>
                        <span>02</span>
                        <h2>destaques</h2>
                    </div>

                    <div className={style.highlightsGrid}>
                        {infcard.map((inf, index) => (
                            <div className={style.cardHighlights}>
                                <h2>{inf.name}</h2>
                                <span>{inf.desc}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}
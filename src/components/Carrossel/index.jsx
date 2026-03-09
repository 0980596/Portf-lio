import style from "./style.module.css";

export default function Carrossel() {
    const rowOne = [
        { src: "https://skillicons.dev/icons?i=js", alt: "javascript logo" },
        { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "react logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "python logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "css logo" },
        { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "tailwindcss logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "vscode logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "github logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "figma logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg", alt: "insomnia logo" },
    ];

    const rowTwo = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "mysql logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "php logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "nodejs logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "git logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "html5 logo" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "c logo" },
        { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "typescript logo" },
        { src: "https://cdn.simpleicons.org/go/00ADD8", alt: "go logo" },
    ];

    return (
        <>
            <div className={style.containercarrousel}>
                <div className={style.group}>
                    {[...rowOne, ...rowOne, ...rowOne].map((item, i) => (
                        <div className={style.card} key={i}>
                            <img src={item.src} height="36" alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.containertwo}>
                <div className={style.group}>
                    {[...rowTwo, ...rowTwo, ...rowTwo].map((item, i) => (
                        <div className={style.card} key={i}>
                            <img src={item.src} height="36" alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}
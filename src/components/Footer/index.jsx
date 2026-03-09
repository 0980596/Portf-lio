import style from "./style.module.css";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <p>@ 2026 Pedro Amancio</p>
                    <p>Construído com React</p>
                </div>
            </footer>
        </>
    )
}
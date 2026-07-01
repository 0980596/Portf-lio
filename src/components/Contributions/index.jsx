import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

const GITHUB_USERNAME = "0980596";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;
const REFRESH_INTERVAL = 60 * 60 * 1000;

const monthFormatter = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
});

function buildCalendar(contributions) {
    if (!contributions.length) {
        return { weeks: [], months: [] };
    }

    const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
    const blanks = Array.from({ length: firstDate.getUTCDay() }, () => null);
    const days = [...blanks, ...contributions];
    const weeks = [];

    for (let index = 0; index < days.length; index += 7) {
        weeks.push(days.slice(index, index + 7));
    }

    const months = [];
    let currentMonth = "";

    weeks.forEach((week, weekIndex) => {
        const firstRealDay = week.find(Boolean);

        if (!firstRealDay) {
            return;
        }

        const date = new Date(`${firstRealDay.date}T00:00:00Z`);
        const month = monthFormatter.format(date);

        if (month !== currentMonth) {
            months.push({ month, weekIndex });
            currentMonth = month;
        }
    });

    months.forEach((entry, index) => {
        const nextEntry = months[index + 1];
        entry.span = (nextEntry ? nextEntry.weekIndex : weeks.length) - entry.weekIndex;
    });

    if (months.length > 1 && months[0].span < 2) {
        months.shift();
    }

    return { weeks, months };
}

export default function Contributions() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let isActive = true;

        async function loadContributions() {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Nao foi possivel carregar as contribuicoes.");
                }

                const result = await response.json();

                if (isActive) {
                    setData(result);
                    setStatus("ready");
                }
            } catch (error) {
                if (isActive) {
                    setStatus("error");
                }
            }
        }

        loadContributions();
        const intervalId = window.setInterval(loadContributions, REFRESH_INTERVAL);

        return () => {
            isActive = false;
            window.clearInterval(intervalId);
        };
    }, []);

    const { weeks, months } = useMemo(() => {
        const contributionDays = Array.isArray(data?.contributions) ? data.contributions : [];

        return buildCalendar(contributionDays);
    }, [data?.contributions]);

    return (
        <section className={styles.contributions} id="contribuicoes">
            <div className={styles.container}>
                <div className={styles.title}>
                    <span>07</span>
                    <h2>contribuições</h2>
                </div>

                <div className={styles.panel}>
                    <div className={styles.header}>
                        {/* <div>
                            <p>GitHub activity</p>
                            <h3>{status === "ready" ? `${total}+ contribuicoes no ultimo ano` : "carregando contribuicoes"}</h3>
                        </div> */}
                    </div>

                    <div className={styles.calendarWrap}>
                        <div className={styles.months} style={{ gridTemplateColumns: `repeat(${weeks.length || 53}, var(--calendar-cell))` }}>
                            {months.map(({ month, weekIndex, span }) => (
                                <span key={`${month}-${weekIndex}`} style={{ gridColumnStart: weekIndex + 1, gridColumnEnd: `span ${span}` }}>
                                    {month}
                                </span>
                            ))}
                        </div>

                        <div className={styles.calendarLine}>
                            <div className={styles.weekdays} aria-hidden="true">
                                <span>Mon</span>
                                <span>Wed</span>
                                <span>Fri</span>
                            </div>

                            <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${weeks.length || 53}, var(--calendar-cell))` }}>
                                {status === "ready"
                                    ? weeks.flatMap((week, weekIndex) =>
                                        week.map((day, dayIndex) => (
                                            <span
                                                key={`${weekIndex}-${dayIndex}`}
                                                className={`${styles.day} ${day ? styles[`level${day.level}`] : styles.empty}`}
                                                title={day ? `${day.count} contribuicoes em ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}` : ""}
                                                aria-label={day ? `${day.count} contribuicoes em ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}` : undefined}
                                            />
                                        ))
                                    )
                                    : Array.from({ length: 371 }, (_, index) => (
                                        <span key={index} className={`${styles.day} ${styles.loading}`} />
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <span>{status === "error" ? "Nao foi possivel carregar agora. A pagina tenta novamente sozinha." : "Atualiza automaticamente a cada hora."}</span>

                        <div className={styles.legend} aria-label="Legenda de contribuicoes">
                            <span>Menos</span>
                            <i className={styles.level0}></i>
                            <i className={styles.level1}></i>
                            <i className={styles.level2}></i>
                            <i className={styles.level3}></i>
                            <i className={styles.level4}></i>
                            <span>Mais</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
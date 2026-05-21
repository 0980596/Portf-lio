import { useEffect, useMemo, useState } from "react";
import { Github } from "lucide-react";
import style from "./style.module.css";

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

function getContributionTotal(data) {
    if (typeof data?.total?.lastYear === "number") {
        return data.total.lastYear;
    }

    return data?.contributions?.reduce((total, day) => total + day.count, 0) ?? 0;
}

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

    const total = getContributionTotal(data);
    const { weeks, months } = useMemo(() => {
        const contributionDays = Array.isArray(data?.contributions) ? data.contributions : [];

        return buildCalendar(contributionDays);
    }, [data?.contributions]);

    return (
        <section className={style.contributions} id="contribuicoes">
            <div className={style.container}>
                <div className={style.title}>
                    <span>07</span>
                    <h2>contribuições</h2>
                </div>

                <div className={style.panel}>
                    <div className={style.header}>
                        {/* <div>
                            <p>GitHub activity</p>
                            <h3>{status === "ready" ? `${total}+ contribuicoes no ultimo ano` : "carregando contribuicoes"}</h3>
                        </div> */}
                    </div>

                    <div className={style.calendarWrap}>
                        <div className={style.months} style={{ gridTemplateColumns: `repeat(${weeks.length || 53}, var(--calendar-cell))` }}>
                            {months.map(({ month, weekIndex }) => (
                                <span key={`${month}-${weekIndex}`} style={{ gridColumnStart: weekIndex + 1 }}>
                                    {month}
                                </span>
                            ))}
                        </div>

                        <div className={style.calendarLine}>
                            <div className={style.weekdays} aria-hidden="true">
                                <span>Mon</span>
                                <span>Wed</span>
                                <span>Fri</span>
                            </div>

                            <div className={style.grid} style={{ gridTemplateColumns: `repeat(${weeks.length || 53}, var(--calendar-cell))` }}>
                                {status === "ready"
                                    ? weeks.flatMap((week, weekIndex) =>
                                        week.map((day, dayIndex) => (
                                            <span
                                                key={`${weekIndex}-${dayIndex}`}
                                                className={`${style.day} ${day ? style[`level${day.level}`] : style.empty}`}
                                                title={day ? `${day.count} contribuicoes em ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}` : ""}
                                                aria-label={day ? `${day.count} contribuicoes em ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}` : undefined}
                                            />
                                        ))
                                    )
                                    : Array.from({ length: 371 }, (_, index) => (
                                        <span key={index} className={`${style.day} ${style.loading}`} />
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className={style.footer}>
                        <span>{status === "error" ? "Nao foi possivel carregar agora. A pagina tenta novamente sozinha." : "Atualiza automaticamente a cada hora."}</span>

                        <div className={style.legend} aria-label="Legenda de contribuicoes">
                            <span>Menos</span>
                            <i className={style.level0}></i>
                            <i className={style.level1}></i>
                            <i className={style.level2}></i>
                            <i className={style.level3}></i>
                            <i className={style.level4}></i>
                            <span>Mais</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

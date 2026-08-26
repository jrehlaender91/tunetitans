import { useState } from "react";
import GhostWord from "../components/GhostWord";
import { scheduleDay1, scheduleDay2 } from "../data/content";
import "./Cronograma.css";

const days = [
  { label: "13 nov · Día 1", items: scheduleDay1 },
  { label: "14 nov · Día 2", items: scheduleDay2 },
];

export default function Cronograma() {
  const [active, setActive] = useState(0);

  return (
    <div className="page-cronograma">
      <div className="page-head wrap">
        <GhostWord word="AGENDA" top="-8%" side="left" size="11vw" />
        <span className="eyebrow">Tune Titans MTY TEC 2026</span>
        <h1 className="section-title">Cronograma</h1>
        <p className="section-sub">
          Dos días de competencia, retroalimentación y conferencias en el Campus Monterrey.
        </p>

        <div className="day-tabs">
          {days.map((d, i) => (
            <button
              key={d.label}
              className={`day-tab ${active === i ? "day-tab-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap cronograma-list">
        {days[active].items.map((item, i) => (
          <div className="cronograma-row" key={i}>
            <span className="cronograma-time">{item.time}</span>
            <span className="cronograma-title">{item.title}</span>
          </div>
        ))}
        <p className="cronograma-note">
          Horarios sujetos a confirmación por parte de la organización.
        </p>
      </div>
    </div>
  );
}

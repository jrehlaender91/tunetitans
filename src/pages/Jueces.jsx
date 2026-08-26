import GhostWord from "../components/GhostWord";
import { judges } from "../data/content";
import "./Jueces.css";

export default function Jueces() {
  return (
    <div className="page-jueces">
      <div className="page-head wrap">
        <GhostWord word="JUECES" top="-6%" side="right" size="12vw" />
        <span className="eyebrow">Tune Titans MTY TEC 2026</span>
        <h1 className="section-title">Jueces</h1>
        <p className="section-sub">
          Panel de ingenieros, productores y educadores con trayectoria internacional.
        </p>
      </div>

      <div className="wrap jueces-list">
        {judges.map((j, i) => (
          <div className="juez-row" key={j.name}>
            <img
              src={new URL(`../assets/${j.photo}`, import.meta.url).href}
              alt={j.name}
              className="juez-photo"
            />
            <div className="juez-info">
              <span className="juez-index">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="juez-name">{j.name}</h2>
              <p className="juez-role">{j.role}</p>
              <p className="juez-bio">{j.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

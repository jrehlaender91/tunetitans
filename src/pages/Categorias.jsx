import GhostWord from "../components/GhostWord";
import { categories } from "../data/content";
import "./Categorias.css";

export default function Categorias() {
  return (
    <div className="page-categorias">
      <div className="page-head wrap">
        <GhostWord word="CAT" top="-10%" side="left" size="16vw" />
        <span className="eyebrow">Tune Titans MTY TEC 2026</span>
        <h1 className="section-title">Categorías</h1>
        <p className="section-sub">
          Los proyectos pueden inscribirse en una o más de las siguientes cinco categorías.
        </p>
      </div>

      <div className="wrap categorias-list">
        {categories.map((c) => (
          <div className="categoria-row" key={c.number}>
            <span className="categoria-number">{c.number}</span>
            <span className="categoria-name">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

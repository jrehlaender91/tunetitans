import GhostWord from "../components/GhostWord";
import { participationSteps } from "../data/content";
import "./Participa.css";

export default function Participa() {
  return (
    <div className="page-participa">
      <div className="page-head wrap">
        <GhostWord word="PARTICIPA" top="-6%" side="left" size="9vw" />
        <span className="eyebrow">Tune Titans MTY TEC 2026</span>
        <h1 className="section-title">¿Cómo participar?</h1>
        <p className="section-sub" style={{ maxWidth: 680 }}>
          El registro y la subida de proyectos se coordinan a través del Director de
          Programa (DP) de tu campus. Sigue estos pasos para llegar a la gran final en
          Monterrey.
        </p>
      </div>

      <div className="wrap participa-steps">
        {participationSteps.map((step, i) => (
          <div className="participa-step" key={i}>
            <span className="participa-step-num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <span className="participa-step-range">{step.range}</span>
              <h3 className="participa-step-title">{step.title}</h3>
              <p className="participa-step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section section-alt">
        <div className="wrap participa-cta">
          <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: 12 }}>
            ¿Listo para inscribirte?
          </h2>
          <p className="section-sub" style={{ marginBottom: 28 }}>
            Habla con el Director de Programa (DP) de tu campus para obtener la liga de
            registro y los lineamientos de entrega de tu categoría.
          </p>
          <div className="hero-actions">
            <a href="mailto:tunetitans@tec.mx" className="btn btn-primary">
              Contactar al comité
            </a>
          </div>
          <p className="cronograma-note" style={{ marginTop: 20 }}>
            Nota: la dirección de contacto es un marcador temporal — reemplázala por la
            oficial del comité organizador.
          </p>
        </div>
      </div>
    </div>
  );
}

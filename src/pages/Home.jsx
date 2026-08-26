import { Link } from "react-router-dom";
import heroMic from "../assets/hero-mic.webp";
import waveform from "../assets/waveform.webp";
import logoMain from "../assets/logo-main.svg";
import logoAbleton from "../assets/logo-ableton.png";
import GhostWord from "../components/GhostWord";
import { event, categories, judges, hackathon } from "../data/content";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroMic} alt="" className="hero-bg" aria-hidden="true" />
        <div className="hero-scrim" />
        <GhostWord word="2026" top="4%" side="right" size="22vw" />
        <div className="wrap hero-content">
          <span className="eyebrow">{event.tagline}</span>
          <img src={logoMain} alt="Tune Titans MTY TEC 2026" className="hero-logo" />
          <p className="hero-dates">
            {event.dates} — {event.location}
          </p>
          <div className="hero-actions">
            <Link to="/participa" className="btn btn-primary">
              Cómo participar
            </Link>
            <Link to="/cronograma" className="btn btn-ghost">
              Ver cronograma
            </Link>
          </div>
        </div>
        <img src={waveform} alt="" className="hero-waveform" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Categorías</span>
          <h2 className="section-title">5 formas de competir</h2>
          <p className="section-sub">
            Desde grabación acústica tradicional hasta sonido para medios audiovisuales.
          </p>
          <div className="home-cat-grid">
            {categories.map((c) => (
              <div className="home-cat-item" key={c.number}>
                <span className="home-cat-number">{c.number}</span>
                <span className="home-cat-name">{c.name}</span>
              </div>
            ))}
          </div>
          <Link to="/categorias" className="btn btn-ghost home-more-link">
            Ver todas las categorías →
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Jueces</span>
          <h2 className="section-title">Panel de expertos</h2>
          <p className="section-sub">
            Ingenieros y productores con trayectoria internacional evaluarán y darán
            retroalimentación a los proyectos finalistas.
          </p>
          <div className="home-judges-grid">
            {judges.map((j) => (
              <div className="home-judge-card" key={j.name}>
                <img
                  src={new URL(`../assets/${j.photo}`, import.meta.url).href}
                  alt={j.name}
                  className="home-judge-photo"
                />
                <div className="home-judge-name">{j.name}</div>
                <div className="home-judge-role">{j.role}</div>
              </div>
            ))}
          </div>
          <Link to="/jueces" className="btn btn-ghost home-more-link">
            Conoce a los jueces →
          </Link>
        </div>
      </section>

      <section className="section hackathon-teaser">
        <div className="wrap hackathon-teaser-inner">
          <div>
            <span className="eyebrow eyebrow-with-logo">
              Powered by
              <img src={logoAbleton} alt="Ableton" className="eyebrow-logo" />
            </span>
            <h2 className="section-title">Hackathon Ableton</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              {hackathon.description}
            </p>
            <Link to="/hackathon" className="btn btn-primary">
              Ver detalles del hackathon
            </Link>
          </div>
          <div className="hackathon-teaser-prizes">
            {hackathon.prizes.map((p) => (
              <div key={p.place} className="hackathon-teaser-prize">
                <span className="hackathon-teaser-place">{p.place}</span>
                <span>{p.prize}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import logoNav from "../assets/logo-nav.svg";
import { event, partners } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logoNav} alt="Tune Titans" className="footer-logo-brand" />
            <p className="footer-tagline">
              {event.tagline} · {event.dates} · {event.location}
            </p>
          </div>

          <nav className="footer-links">
            <Link to="/categorias">Categorías</Link>
            <Link to="/jueces">Jueces</Link>
            <Link to="/cronograma">Cronograma</Link>
            <Link to="/hackathon">Hackathon</Link>
            <Link to="/participa">Participa</Link>
          </nav>
        </div>

        <div className="footer-partners">
          <span className="footer-partners-label">Con la colaboración de</span>
          <div className="footer-partners-logos">
            {partners.map((p) =>
              p.light ? (
                <img
                  key={p.file}
                  src={new URL(`../assets/${p.file}`, import.meta.url).href}
                  alt={p.name}
                  className="footer-logo"
                />
              ) : (
                <span className="footer-logo-chip" key={p.file}>
                  <img
                    src={new URL(`../assets/${p.file}`, import.meta.url).href}
                    alt={p.name}
                    className="footer-logo"
                  />
                </span>
              ),
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Tune Titans — Tecnológico de Monterrey</span>
        </div>
      </div>
    </footer>
  );
}

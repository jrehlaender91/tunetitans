import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../assets/logo-nav.svg";
import "./Navbar.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/categorias", label: "Categorías" },
  { to: "/jueces", label: "Jueces" },
  { to: "/cronograma", label: "Cronograma" },
  { to: "/hackathon", label: "Hackathon" },
  { to: "/participa", label: "Participa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="wrap navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src={logoNav} alt="Tune Titans" className="navbar-logo" />
        </NavLink>

        <nav className={`navbar-links ${open ? "navbar-links-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

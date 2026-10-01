import { useEffect, useState } from "react";
import { NAV } from "../data";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "s" : ""}>
      <div className="w nav">
        <a className="logo" href="#inicio" aria-label="Nexa Fiscal, início">
          <svg className="mark" viewBox="0 0 34 34" aria-hidden="true">
            <rect width="34" height="34" rx="9" fill="#0b1f3a" />
            <path d="M10 25V9l14 16V9" fill="none" stroke="#12b5a6" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span><b>Nexa Fiscal</b><small>Consultoria Tributária e Fiscal</small></span>
        </a>
        <nav className="links" aria-label="Principal">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="nr">
          <WhatsAppButton>
            <span className="wa-s">Falar com especialista</span>
            <span className="wa-x">WhatsApp</span>
          </WhatsAppButton>
          <button className="burger" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mob" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
      <nav className={`mob${open ? " o" : ""}`} id="mob" aria-label="Menu mobile">
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
      </nav>
    </header>
  );
}

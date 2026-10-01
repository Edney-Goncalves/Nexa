import type { CSSProperties } from "react";
import WhatsAppButton from "./WhatsAppButton";

const BARS = [35, 50, 42, 68, 80, 95];
const CHIPS = [["Obrigações", "Em dia"], ["Riscos", "Mapeados"], ["Cenários", "Comparados"], ["Créditos", "Em análise"]];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="w hg">
        <div>
          <h1>Mais clareza para suas decisões fiscais.</h1>
          <p className="lead">Consultoria fiscal e tributária para empresas que buscam reduzir riscos, organizar processos e tomar decisões com mais segurança.</p>
          <div className="cta-r">
            <WhatsAppButton>Falar com um especialista</WhatsAppButton>
            <a className="btn b2" href="#servicos">Conhecer nossos serviços</a>
          </div>
          <p className="note">Atendimento personalizado • Análise estratégica • Soluções sob medida</p>
        </div>
        <div className="viz" role="img" aria-label="Ilustração de painel com gráfico de barras e indicadores fiscais">
          <div className="row"><span>Panorama fiscal</span><span>Exercício atual</span></div>
          <div className="bars">
            {BARS.map((h) => <i key={h} style={{ "--h": `${h}%` } as CSSProperties} />)}
          </div>
          <div className="chips">
            {CHIPS.map(([t, s]) => <div key={t}><b>{t}</b>{s}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

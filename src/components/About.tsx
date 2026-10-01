const STATS = [
  ["Análise técnica", "Base sólida em legislação e processos."],
  ["Atendimento personalizado", "Cada cenário recebe um plano próprio."],
  ["Atendimento remoto", "Conversa direta por WhatsApp e videochamada."],
];

export default function About() {
  return (
    <section id="sobre">
      <div className="w ab">
        <div className="txt">
          <h2>Consultoria fiscal com visão de negócio</h2>
          <p className="lead">A Nexa Fiscal nasceu com o propósito de tornar assuntos fiscais e tributários mais claros para empresas que precisam tomar decisões com segurança.</p>
          <p className="mut" style={{ marginTop: 14 }}>Nosso trabalho combina análise técnica, organização de informações e visão estratégica para ajudar empresas a compreender melhor seus desafios fiscais.</p>
        </div>
        <div className="stats">
          {STATS.map(([t, s]) => <div className="stat" key={t}><b>{t}</b><p className="mut">{s}</p></div>)}
        </div>
      </div>
    </section>
  );
}

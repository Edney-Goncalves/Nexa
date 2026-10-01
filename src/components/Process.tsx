import { STEPS } from "../data";

export default function Process() {
  return (
    <section id="como-funciona" className="alt">
      <div className="w">
        <h2>Do diagnóstico à estratégia</h2>
        <ol className="steps" style={{ listStyle: "none", padding: 0, marginBottom: 0 }}>
          {STEPS.map((s) => (
            <li className="step rv" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

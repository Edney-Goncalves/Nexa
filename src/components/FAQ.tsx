import { FAQS } from "../data";

export default function FAQ() {
  return (
    <section id="faq" className="alt">
      <div className="w">
        <h2 style={{ textAlign: "center" }}>Perguntas frequentes</h2>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <div className="ans"><div><p>{f.a}</p></div></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

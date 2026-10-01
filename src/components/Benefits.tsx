import { BENEFITS } from "../data";

export default function Benefits() {
  return (
    <section id="diferenciais">
      <div className="w">
        <h2>Por que contar com a Nexa Fiscal?</h2>
        <div className="grid g3">
          {BENEFITS.map((b) => (
            <div className="card rv" key={b.title}><h3>{b.title}</h3><p>{b.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

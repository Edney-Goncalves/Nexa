import { SERVICES } from "../data";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="servicos" className="alt">
      <div className="w">
        <h2>Soluções para sua empresa</h2>
        <p className="lead">Consultoria especializada para diferentes necessidades fiscais e tributárias.</p>
        <div className="grid g3">
          {SERVICES.map((s) => (
            <div className="card rv" key={s.title}>
              <Icon d={s.icon} /><h3>{s.title}</h3><p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

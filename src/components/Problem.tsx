import { PROBLEMS } from "../data";
import Icon from "./Icon";

export default function Problem() {
  return (
    <section id="problema">
      <div className="w">
        <h2>Sua empresa está preparada para lidar com a complexidade fiscal?</h2>
        <div className="grid g4">
          {PROBLEMS.map((p) => (
            <div className="card rv" key={p.title}>
              <Icon d={p.icon} /><h3>{p.title}</h3><p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="sol">A Nexa Fiscal transforma complexidade tributária em decisões mais claras.</p>
      </div>
    </section>
  );
}

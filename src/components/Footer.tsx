import { EMAIL, WHATSAPP_URL } from "../config";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div><h4>Nexa Fiscal</h4>Consultoria Tributária e Fiscal</div>
          <div>
            <h4>Links</h4>
            <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#faq">FAQ</a><a href="#contato">Contato</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
        <p className="cp">© 2026 Nexa Fiscal. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

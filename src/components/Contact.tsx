import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  return (
    <section id="contato" className="final">
      <div className="w">
        <h2>Vamos conversar sobre sua empresa?</h2>
        <p className="lead">Envie uma mensagem pelo WhatsApp e conte brevemente o que sua empresa precisa.</p>
        <WhatsAppButton>Iniciar conversa no WhatsApp</WhatsAppButton>
      </div>
    </section>
  );
}

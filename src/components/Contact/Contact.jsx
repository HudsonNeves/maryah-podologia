import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <h3>Contato</h3>

        <form className="contact-form">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Mensagem"></textarea>

          <button type="button">Enviar Mensagem</button>
        </form>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Contact

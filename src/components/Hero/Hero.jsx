import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Cuidado profissional para a saúde dos seus pés</h2>

        <p>
          Atendimento especializado em podologia clínica, com foco em bem-estar,
          prevenção e qualidade de vida.
        </p>

        <a
          href="#contato"
          className="hero-button"
        >
          Agendar Atendimento
        </a>
      </div>
    </section>
  )
}

export default Hero

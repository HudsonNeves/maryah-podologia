import ServiceCard from './ServiceCard'
import './Services.css'

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-container">
        <h3>Serviços</h3>

        <div className="services-grid">
          <ServiceCard
            title="Podologia Clínica"
            description="Avaliação e cuidados especializados para a saúde dos pés."
          />

          <ServiceCard
            title="Unha Encravada"
            description="Tratamento seguro e eficaz, com alívio imediato da dor."
          />

          <ServiceCard
            title="Calosidades"
            description="Remoção técnica e prevenção de recorrências."
          />

          <ServiceCard
            title="Pé Diabético"
            description="Cuidados preventivos e acompanhamento especializado."
          />
        </div>
      </div>
    </section>
  )
}

export default Services

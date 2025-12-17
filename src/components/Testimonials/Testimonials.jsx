import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h3>Depoimentos</h3>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “Atendimento excelente, ambiente muito limpo e profissional.
              Recomendo fortemente.”
            </p>
            <span>— Ana Paula</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Muito cuidado e atenção em cada detalhe. Me senti totalmente
              segura.”
            </p>
            <span>— Carlos Henrique</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Profissional extremamente qualificada e humana. Voltarei com
              certeza.”
            </p>
            <span>— Juliana Souza</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

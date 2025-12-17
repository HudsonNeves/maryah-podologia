import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Maryah Podologia</h1>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#contato" className="btn-contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

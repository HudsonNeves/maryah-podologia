import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Differentials from './components/Differentials/Differentials'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: '100px' }}>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

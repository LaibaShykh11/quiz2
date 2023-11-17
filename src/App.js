import ContactUs from './components/ContactUs'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Projects } from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import About from './components/About'

function App() {
  return (
    <div>
      <routes>
        <Header />
        <HeroSection />
        <Projects />
        <About />
        <ContactUs />
        <Footer />
      </routes>
    </div>
  )
}

export default App

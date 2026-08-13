import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

// The visible sections of the page
const activeSections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  // { id: 'testimonials', label: 'Testimonials' }, // Uncomment when restoring testimonials
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  return (
    <>
      <Nav links={activeSections} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  )
}

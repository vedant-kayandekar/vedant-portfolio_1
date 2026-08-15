import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

// The visible sections of the page
const activeSections = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
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
        <Gallery />
        <Story />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  )
}

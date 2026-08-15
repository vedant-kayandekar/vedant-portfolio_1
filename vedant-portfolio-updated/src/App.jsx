import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Story from './components/Story'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

// The visible sections of the page
const activeSections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'story', label: 'Story' },
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
        <Gallery />
        <Skills />
        <Projects />
        <Story />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  )
}

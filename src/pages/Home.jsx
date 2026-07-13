import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Organizations from '../components/sections/Organizations';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Organizations />
      <Certifications />
      <Contact />
    </main>
  );
}

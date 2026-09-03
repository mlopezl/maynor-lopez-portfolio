import '../App.css'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import CoursesSection from '../sections/CoursesSection'
import EducationSection from '../sections/EducationSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import LearningSection from '../sections/LearningSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

function App() {
  useRevealOnScroll()

  return <div className="site-shell">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LearningSection />
      <EducationSection />
      <CoursesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
}

export default App

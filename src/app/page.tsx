import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"
import Research from "./components/home/research"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <Research />
        <LatestWork />
        <Contact />
      </main>
    </>
  )
}

export default page
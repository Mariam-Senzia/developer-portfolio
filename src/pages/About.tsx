import AboutHero from "../components/about/AboutHero";
import ExperienceAndEducation from "../components/about/ExperienceAndEducation";
import Testimonials from "../components/about/Testimonials";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ReachOut from "../components/home/ReachOut";

const About = () => {
  return (
  <>
    <Navbar />
    <AboutHero />
    <ExperienceAndEducation />
    <Testimonials />
    <ReachOut />
    <Footer />
  </>
  );
};

export default About;

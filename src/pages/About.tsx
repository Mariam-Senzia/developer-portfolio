import AboutHero from "../components/about/AboutHero";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import Testimonials from "../components/about/Testimonials";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ReachOut from "../components/home/ReachOut";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Experience />
      <Education />
      <Testimonials />
      <ReachOut />
      <Footer />
    </>
  );
};

export default About;

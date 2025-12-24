import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ReachOut from "../components/home/ReachOut";
// import Certificates from "../components/skills/Certificates";
import SkillsCards from "../components/skills/SkillsCards";

const Skills = () => {
  return (
    <>
      <Navbar />
      <SkillsCards />
      {/* <Certificates /> */}
      <ReachOut />
      <Footer />
    </>
  );
};

export default Skills;

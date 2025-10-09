import Navbar from "../components/home/Navbar";
import ReachOut from "../components/home/ReachOut";
import Footer from "../components/home/Footer";
import OpenSource from "../components/projects/OpenSource";
import ProjectDisplay from "../components/projects/ProjectsDisplay";

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectDisplay />
      <OpenSource />
      <ReachOut />
      <Footer />
    </>
  );
};

export default Projects;

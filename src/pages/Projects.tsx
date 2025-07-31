import { Box } from "@chakra-ui/react";
import HomeProjects from "../components/home/HomeProjects";
import Navbar from "../components/home/Navbar";
import ReachOut from "../components/home/ReachOut";
import Footer from "../components/home/Footer";
import OpenSource from "../components/projects/OpenSource";

const Projects = () => {
  return (
  <>
    <Navbar />
    <Box mt="100px">
      <HomeProjects />
    </Box>
    <OpenSource /> 
    <ReachOut />
    <Footer />
  </>
  );
};

export default Projects;

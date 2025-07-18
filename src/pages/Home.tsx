import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
// import Projects from "../components/home/HomeProjects";
import ReachOut from "../components/home/ReachOut";
import HomeProjects from "../components/home/HomeProjects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeProjects />
      <ReachOut />
      <Footer />
    </>
  );
};

export default Home;

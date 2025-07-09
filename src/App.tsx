import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectDetails" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;

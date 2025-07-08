import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        
      </ChakraProvider>
    </>
  );
}

export default App;

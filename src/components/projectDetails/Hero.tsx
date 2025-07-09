import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import { Box, Container, Heading } from "@chakra-ui/react";
import Navbar from "../home/Navbar";


const Hero = () => {
    const projects = useProjects();
    const {title} = useParams();

    const selectedProject = projects.find((item) => {
        return item.title.toLowerCase() === title?.toLowerCase()
    })

    return (
        <>
        <Container>
            <Navbar />
            <Box>
                <Box mt="100px">
                    <Heading color="white">{selectedProject?.title}</Heading>
                </Box>
            </Box>
        </Container>
        </>
    );
}

export default Hero;
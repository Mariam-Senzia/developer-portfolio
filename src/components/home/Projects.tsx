import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
    <Container maxW="container.xl">
        <Box backgroundColor='#161b22' borderRadius="20px" mt="30px">
            <Heading color="white" textAlign="center" pt="35px">Projects</Heading>
            <Text color="#929b8d" textAlign="center" mt="15px" fontSize="lg">A glimpse into what I&apos;ve been building, driven by curiosity</Text>
            <Text color="#929b8d" textAlign="center" mt="" fontSize="lg">and a passion for creating practical web applications.</Text>
        </Box>
    </Container>
    </>
  );
};

export default Projects;

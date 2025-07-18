import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import {FaEnvelope} from "react-icons/fa6";

const AboutHero = () => {
    return (
    <>
    <Container maxW="container.xl">
        <Box display='flex' gap="8" mt="100px">
            <Box backgroundColor='#161b22' textAlign="center" p="10"  flex="1" borderRadius="20px">
                <Image src="images/my-image.webp" alt="my-image" height="350px" width="250px" borderRadius="200px" mx="auto" mt="30px"/>
            </Box>

            <Box display="flex" flexDirection="column" flex="2" gap="8" overflow="hidden">
                <Box backgroundColor='#161b22' borderRadius="20px" p="10">
                    <Text color="white" mt="15px" fontSize="3xl">I'm Mariam Senzia, a passionate Full Stack Developer and DevOps Engineer.</Text>
                    <Text color="#929b8d" fontSize="lg" mt="20px">I build web applications that are clean, reliable and user-focused. I enjoy solving problems, improving workflows and writing code that&apos;s easy to understand and maintain. I take ownership of my work, ask the right questions and stay curious about better ways to build and deploy software.
                    </Text>
                    <Text color="#929b8d" fontSize="lg" mt="20px">
                        I work well both independently and in collaborative environments and value clear communication and continuous growth. I care about doing meaningful work, building reliable solutions and contributing to projects that prioritize quality, learning and impact.
                    </Text>
                    <Button as="a" href="docs/Mariam Senzia Resume.pdf" download rightIcon={<FaEnvelope />} mt="35px" bgColor="#56d364" _hover={{backgroundColor:"#1D8678"}}>
                        Get in touch
                    </Button>
                </Box>
            </Box>
        </Box>
    </Container>
    </>
  );
};

export default AboutHero;

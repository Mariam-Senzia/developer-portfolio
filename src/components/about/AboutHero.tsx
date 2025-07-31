import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import {FaEnvelope} from "react-icons/fa6";
import { AnimationBox } from "../../animations/AnimationBox";

const AboutHero = () => {
    return (
    <>
    <Container maxW="container.xl">
        <AnimationBox display={{base: "block", md: "flex"}} gap="8" mt="100px">
            <Box backgroundColor='#161b22' p="8"  flex="1" borderRadius="20px" display="flex" alignItems="center">
                <Image src="/images/portfolio-image.jpg" alt="my-image" height="350px" width="350px" borderRadius="200px" mx="auto"/>
            </Box>

            <Box mt={{base: "30px", md: "0"}} flex="2" backgroundColor='#161b22' borderRadius="20px" p="8" overflow="hidden">
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
        </AnimationBox>
    </Container>
    </>
  );
};

export default AboutHero;

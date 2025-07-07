import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { FaDotCircle } from "react-icons/fa";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <Container maxW="container.xl">
        <Box display='flex' gap="8">
            <Box backgroundColor='#161b22' textAlign="center" p="10" borderRadius="20px" flex="1">
                <Image src="/my-image.webp" alt="my-image" height="350px" width="250px" borderRadius="200px" mx="auto" mt="30px"/>
                <Heading color='white' mt="35px">Mariam Senzia</Heading>
                <Text color='#969696' mt="10px">I am a Software Developer based in Nairobi, Kenya</Text>
                <Box display="flex" gap="5" mt="20px" justifyContent="center">
                    <Link href="https://github.com/Mariam-Senzia" target="_blank">
                        <IconButton aria-label="my github" variant='outline' borderColor="#353E45" color="#969696" _hover={{color:"#56d364"}}>
                            <FaGithub size="20px" />
                        </IconButton>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mariamsenzia/" target="_blank">
                        <IconButton aria-label="my linkedin" variant='outline' borderColor="#353E45" color="#969696" _hover={{color:"#56d364"}}>
                            <FaLinkedin size="20px" />
                        </IconButton>
                    </Link>
                    <Link href="mailto:mariamsenzia@gmail.com">
                        <IconButton aria-label="send email" variant='outline' borderColor="#353E45" color="#969696" _hover={{color:"#56d364"}}>
                            <FaEnvelope size="20px" />
                        </IconButton>
                    </Link>
                </Box>
            </Box>
            <Box flex="2">
                <Box backgroundColor='#161b22' borderRadius="20px" p="10" >
                    <Text color="#929b8d">Hello There!</Text>
                    <Text color="white" mt="15px" fontSize="3xl">I'm Mariam Senzia, a passionate Full Stack Developer and DevOps Engineer dedicated to building high quality web applications that solve real business problems.</Text>
                    <Flex mt="20px" gap="2">
                        <FaDotCircle color="#56d364"/>
                        <Text color="#929b8d" mt="-2px">Available for Freelancing</Text>
                    </Flex>
                    <Button as="a" href="/Mariam Senzia Resume.pdf" download rightIcon={<FaDownload />} mt="35px" bgColor="#56d364" _hover={{backgroundColor:"#1D8678"}}>
                        Download Resume
                    </Button>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    </Container>
    </>
  );
};

export default Hero;

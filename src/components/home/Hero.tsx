import { Box, Container, Heading, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <Container maxW="container.xl">
        <Box display='flex'>
            <Box backgroundColor='#161b22' textAlign="center" p="10" borderRadius="20px">
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
        </Box>
    </Container>
    </>
  );
};

export default Hero;

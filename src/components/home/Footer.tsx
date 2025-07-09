import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
    <Container maxW="container.xl">
        <Box mt="30px" mb="30px">
            <Text color="white">Copyright &copy;{new Date().getFullYear()}, <span style={{color:'#56d364'}}>Mariam</span> All Rights Reserved.</Text>
        </Box>
    </Container>
    </>
  );
};

export default Footer;

import { Box, Container, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box mt="30px" mb="30px">
          <Text color="white">
            Copyright &copy;{new Date().getFullYear()},{" "}
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <span style={{ color: "#56d364" }}>Mariam</span>{" "}
            </Link>
            All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Footer;

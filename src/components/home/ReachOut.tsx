import { Box, Button, Container, Link, Text } from "@chakra-ui/react";

const ReachOut = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box backgroundColor="#161b22" borderRadius="20px" mt="30px">
            <Text color="white" fontSize="4xl" textAlign="center" pt="60px">
                Are You Ready to kickstart your project with
            </Text>
            <Text color="white" fontSize="4xl" textAlign="center" mt="-5px">
                a touch of magic?
            </Text>
            <Text color="#929b8d" textAlign="center" mt="15px" fontSize="lg">
                Reach out and lets make it happpen. I'm also available for full-time or part-time opportunities
            </Text>
            <Text color="#929b8d" textAlign="center" mt="" fontSize="lg">
                where I can push the limits of code and deliver exceptional work.
            </Text>
            <Box textAlign="center" mt="25px">
                <Link href="mailto:mariamsenzia@gmail.com">
                    <Button bgColor="#56d364" _hover={{backgroundColor:"#1D8678"}} mb="55px">
                        Let's Talk
                    </Button>
                </Link>
            </Box>
        </Box>
      </Container>
    </>
  );
};

export default ReachOut;
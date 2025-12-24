import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { AnimationBox } from "../../animations/AnimationBox";

const ReachOut = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box backgroundColor="#161b22" borderRadius="20px" mt="30px">
          <AnimationBox>
            <Text
              color="white"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              pt="60px"
              px={{ base: "0.5rem", lg: "17rem" }}
            >
              Are You Ready to kickstart your project with a touch of magic?
            </Text>
            <Text
              color="#929b8d"
              textAlign="center"
              mt="15px"
              fontSize="lg"
              px={{ base: "1rem", lg: "15rem" }}
            >
              Reach out and lets make it happpen. I'm also available for
              full-time or part-time opportunities where I can push the limits
              of code and deliver exceptional work.
            </Text>

            <Box textAlign="center" mt="25px">
              <Link href="mailto:mariamsenzia@gmail.com">
                <Button
                  bgColor="#56d364"
                  transition=" all 0.3s ease-in-out"
                  _hover={{
                    backgroundColor: "#46ad52",
                    transform: "translateY(-0.1rem)",
                  }}
                  mb="55px"
                >
                  Let's Talk
                </Button>
              </Link>
            </Box>
          </AnimationBox>
        </Box>
      </Container>
    </>
  );
};

export default ReachOut;

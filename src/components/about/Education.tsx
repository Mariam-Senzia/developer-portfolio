import { Box, Container, Divider, IconButton, Text } from "@chakra-ui/react";
import { AnimationBox } from "../../animations/AnimationBox";
import { FaLaptopCode, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import useEducation from "../../hooks/useEducation";

const Education = () => {
  const education = useEducation();
  return (
    <>
      <Container maxW="container.xl">
        <Box
          mt={{ base: "30px", md: "0" }}
          display={{ base: "block", md: "flex" }}
          gap="8"
        >
          <Box
            backgroundColor="#161b22"
            borderRadius="20px"
            p={{ base: "6", md: "10" }}
            mt="30px"
            flex={2}
          >
            <AnimationBox>
              <Text color="white" fontSize="2xl" fontWeight="bold">
                Education
              </Text>

              {education.map((item, index) => (
                <Box key={index} display="flex" gap="5" mt="25px">
                  <Box>
                    <IconButton aria-label="coding laptop" bgColor="white">
                      <FaLaptopCode color="#56d364" fontSize="25px" />
                    </IconButton>
                  </Box>

                  <Box>
                    <Text color="#929b8d">{item.date}</Text>
                    <Text color="white" fontSize="lg" mt="10px">
                      {item.course}
                    </Text>
                    <Text color="#929b8d" mt="10px">
                      {item.school}
                    </Text>

                    <Divider mt="30px" />
                  </Box>
                </Box>
              ))}
            </AnimationBox>
          </Box>

          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            justifyContent="center"
            backgroundColor="#161b22"
            borderRadius="20px"
            p={{ base: "6", md: "10" }}
            mt="30px"
          >
            <AnimationBox display="flex" flexDirection="column">
              <Box>
                <FaQuoteLeft color="white" />
              </Box>
              <Box px={6}>
                <Text
                  color="white"
                  mt="5px"
                  mb="5px"
                  fontStyle="italic"
                  fontSize="xl"
                >
                  I build experiences that work, scale and evolve with users
                  with a focus on writing clean code, creating impact and
                  continuously growing as a developer.
                </Text>
              </Box>
              <Box alignSelf="end">
                <FaQuoteRight color="white" />
              </Box>
            </AnimationBox>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Education;

import {
  Box,
  Container,
  Divider,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import useExperience from "../../hooks/useExperience";
import { FaLaptopCode } from "react-icons/fa6";
import { AnimationBox } from "../../animations/AnimationBox";

const Experience = () => {
  const experience = useExperience();

  return (
    <>
      <Container maxW="container.xl">
        <AnimationBox>
          <Box
            backgroundColor="#161b22"
            borderRadius="20px"
            p={{ base: "6", md: "10" }}
            mt="30px"
          >
            <Text color="white" fontSize="2xl" fontWeight="bold">
              Experience
            </Text>
            {experience.map((exp, index) => (
              <Box
                key={index}
                display={{ base: "block", md: "flex" }}
                gap="5"
                mt="25px"
              >
                <Box
                  display={{ base: "flex", md: "block" }}
                  gap="3"
                  alignItems="center"
                  mb={{ base: "15px", md: "0" }}
                >
                  <IconButton aria-label="coding laptop" bgColor="white">
                    <FaLaptopCode color="#56d364" fontSize="25px" />
                  </IconButton>
                  <Text display={{ base: "block", md: "none" }} color="#929b8d">
                    {exp.date}
                  </Text>
                </Box>

                <Box>
                  <Text display={{ base: "none", md: "block" }} color="#929b8d">
                    {exp.date}
                  </Text>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    gap="2"
                    mt="5px"
                    mb={{ base: "10px", md: "0" }}
                  >
                    <Text color="white" fontSize="lg">
                      {exp.title},
                    </Text>
                    <Text color="white" fontSize="lg">
                      {exp.company}
                    </Text>
                  </Box>
                  <Text color="#929b8d">{exp.extra1}</Text>

                  <Divider mt="15px" />
                  <Text color="#929b8d" fontSize="lg" mt="15px">
                    {exp.extra2}
                  </Text>

                  {exp.roles.map((item, index) => (
                    <UnorderedList key={index} mt="10px">
                      <ListItem color="#929b8d">{item}</ListItem>
                    </UnorderedList>
                  ))}
                </Box>
              </Box>
            ))}
            ;
          </Box>
        </AnimationBox>
      </Container>
    </>
  );
};

export default Experience;

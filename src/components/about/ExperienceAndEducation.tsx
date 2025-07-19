import { Box, Container, Divider, Flex, IconButton, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import useExperience from "../../hooks/useExperience"
import useEducation from "../../hooks/useEducation";
import { FaLaptopCode, FaQuoteRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";

const ExperienceAndEducation = () => {
  const experience = useExperience();
  const education = useEducation();

  return (
    <>
    <Container maxW="container.xl">
        <Box display="flex" gap="8" mt="30px">
            <Box flex="3" backgroundColor="#161b22" borderRadius="20px" p="10" >
                <Text color="white" fontSize="2xl" fontWeight="bold">Experience</Text>

                {experience.map((exp, index) => (
                    <Box key={index} display="flex" gap="5" mt="25px">
                        <Box>
                            <IconButton aria-label="coding laptop" bgColor="white">
                                <FaLaptopCode color="#56d364" fontSize="25px"/>
                            </IconButton>
                        </Box>

                        <Box>
                            <Text color="#929b8d">{exp.date}</Text>
                            <Flex gap="2" mt="10px">
                                <Text color="white" fontSize="lg">{exp.title},</Text>
                                <Text color="white" fontSize="lg">{exp.company}</Text>
                            </Flex>
                            {exp.roles.map((item, index) => (
                                <UnorderedList key={index} mt="15px">
                                    <ListItem color="#929b8d">{item}</ListItem>
                                </UnorderedList>
                            ))}
                            <Divider mt="40px" /> 
                        </Box>      
                    </Box>
                ))};
            </Box>

            <Box flex="2">
                <Box backgroundColor="#161b22" borderRadius="20px" p="10">
                    <Text color="white" fontSize="2xl" fontWeight="bold">Education</Text>

                    {education.map((item, index) => (
                        <Box key={index} display="flex" gap="5" mt="25px">
                            <Box>
                                <IconButton aria-label="coding laptop" bgColor="white">
                                    <FaLaptopCode color="#56d364" fontSize="25px"/>
                                </IconButton>
                            </Box>

                            <Box>
                                <Text color="#929b8d">{item.date}</Text>
                                <Text color="white" fontSize="lg" mt="10px">{item.course}</Text>
                                <Text color="#929b8d" mt="10px">{item.school}</Text>

                                <Divider mt="30px" />
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box display="flex" flexDirection="column" backgroundColor="#161b22" borderRadius="20px" p="10" mt="30px">
                    <Box>
                        <FaQuoteLeft color="white" />
                    </Box>
                    <Text color="white" mt="5px" ml="15px" mb="5px" fontStyle="italic" fontSize="xl">
                        I don&apos;t just build features - I build experiences that work, scale and evolve with users.My focus is on writing clean code, creating impact and continuously growing as a developer.
                    </Text>
                    <Box alignSelf="end">
                        <FaQuoteRight color="white" />
                    </Box>
                </Box>
            </Box>
        </Box>     
    </Container>
    </>
  )
}

export default ExperienceAndEducation
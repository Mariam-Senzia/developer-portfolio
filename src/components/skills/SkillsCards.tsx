import { Box, Card, Container, Flex, Grid, Heading, Text} from "@chakra-ui/react"
import useSkills from "../../hooks/useSkills"
import { FaArrowRight } from "react-icons/fa6";
import { AnimationBox } from "../../animations/AnimationBox";

const SkillsCards = () => {
  const skills = useSkills();

  return (
    <>
        <Container maxW="container.xl">
            <AnimationBox backgroundColor='#161b22' borderRadius="20px" mt="100px" p="10">
                <Heading color="white" textAlign="center" fontSize="3xl">Skills</Heading>
                <Text textAlign="center" color="#929b8d" mt="10px" fontSize="lg">Technologies I've worked with to build scalable, user-friendly web applications</Text>

                
                <Grid templateColumns="repeat(3, 1fr)" gap="5" mt="30px">
                    {skills.map((item, index) => (
                        <Card key={index} p="10" variant="outline" borderColor="#3E3E3D" backgroundColor='#161b22' _hover={{ borderColor:"#56d364"}}>
                            <Box>
                                {<item.icon size="40px" color="#56d364" />}
                            </Box>
                            <Text mt="10px" color="white" fontSize="xl">{item.title}</Text>
                            <Text mt="10px" color="#929b8d">{item.description}</Text>
                            {item.skills.map((skill) => (
                                <Flex mt="15px" gap="3">
                                    <Box mt="3px">
                                        <FaArrowRight color="#929b8d" />    
                                    </Box>
                                    <Text color="#929b8d">{skill}</Text>
                                </Flex>
                            ))}
                        </Card>
                    ))}
                </Grid>
            </AnimationBox>
        </Container>
    </>
  )
}

export default SkillsCards
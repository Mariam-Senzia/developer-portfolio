import { Container, Heading, Text } from "@chakra-ui/react";
import useProjects from "../../hooks/useProjects";
import MotionGrid from "../../animations/MotionGrid";
import { AnimationBox } from "../../animations/AnimationBox";
import ProjectCard from "../common/ProjectCard";

const ProjectDisplay = () => {
  const projects = useProjects();

  return (
    <>
      <Container maxW="container.xl" mt="100px">
        <AnimationBox backgroundColor="#161b22" borderRadius="20px" mt="30px">
          <Heading color="white" textAlign="center" pt="35px">
            Projects
          </Heading>
          <Text color="#929b8d" textAlign="center" mt="15px" fontSize="lg">
            A glimpse into what I&apos;ve been building, driven by curiosity
          </Text>
          <Text color="#929b8d" textAlign="center" mt="" fontSize="lg">
            and a passion for creating practical web applications.
          </Text>

          <MotionGrid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap="8"
            px="40px"
            py="45px"
          >
            {projects.map((item, index) => (
              <ProjectCard item={item} index={index} />
            ))}
          </MotionGrid>
        </AnimationBox>
      </Container>
    </>
  );
};

export default ProjectDisplay;

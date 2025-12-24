import { Box, Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
import useProjects from "../../hooks/useProjects";
import MotionGrid from "../../animations/MotionGrid";
import { AnimationBox } from "../../animations/AnimationBox";
import ProjectCard from "../common/ProjectCard";

const HomeProjects = () => {
  const projects = useProjects();

  return (
    <>
      <Container maxW="container.xl">
        <AnimationBox backgroundColor="#161b22" borderRadius="20px" mt="30px">
          <Heading color="white" textAlign="center" pt="35px">
            Projects
          </Heading>
          <Text
            color="#929b8d"
            textAlign="center"
            mt="15px"
            fontSize="lg"
            px={{ base: "0.5rem", lg: "24rem" }}
          >
            A glimpse into what I&apos;ve been building, driven by curiosity and
            a passion for creating practical web applications
          </Text>

          <MotionGrid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap="8"
            px={{ base: "15px", md: "40px" }}
            py={{ base: "25px", md: "45px" }}
          >
            {projects.slice(0, 3).map((item, index) => (
              <ProjectCard item={item} index={index} />
            ))}
          </MotionGrid>

          <Box textAlign="center" pb="50px">
            <Link href="/projects">
              <Button
                bgColor="#56d364"
                transition=" all 0.3s ease-in-out"
                rightIcon={<FaArrowRight />}
                _hover={{
                  backgroundColor: "#46ad52",
                  transform: "translateY(-0.1rem)",
                }}
                // mb="55px"
              >
                View All Projects
              </Button>
            </Link>
          </Box>
        </AnimationBox>
      </Container>
    </>
  );
};

export default HomeProjects;

import {
  Box,
  Button,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
import useProjects from "../../hooks/useProjects";
import MotionGrid from "../../animations/MotionGrid";
import MotionCard from "../../animations/MotionCard";
import { AnimationBox } from "../../animations/AnimationBox";

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
              <Link href={`/projectDetails/${item.title}`}>
                <MotionCard
                  key={index}
                  maxW="xl"
                  height="100%"
                  variant="outline"
                  borderColor="#26272B"
                  backgroundColor="#121214"
                  p="0"
                  _hover={{
                    transform: "scale(1.03)",
                  }}
                  transition="all 0.3s ease-in-out"
                >
                  <CardBody p="0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      borderRadius="lg"
                      borderBottomRadius="0"
                      height="250px"
                    />
                    <Stack mt="6" spacing="3" p="5">
                      <Heading size="md" color="white">
                        {item.title}
                      </Heading>
                      <Text color="#929b8d">{item.description}</Text>
                    </Stack>
                  </CardBody>
                  <Flex mt="-10px" p="2" mb="15px">
                    <Button
                      variant="ghost"
                      color="#669cbf"
                      colorScheme=""
                      _hover={{ color: "#56d364" }}
                    >
                      View Project
                    </Button>
                    <Box mt="16px" ml="-8px">
                      <FaArrowRight color="#669cbf" size="10px" />
                    </Box>
                  </Flex>
                </MotionCard>
              </Link>
            ))}
          </MotionGrid>
        </AnimationBox>
      </Container>
    </>
  );
};

export default ProjectDisplay;

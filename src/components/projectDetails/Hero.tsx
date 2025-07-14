import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Navbar from "../home/Navbar";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Hero = () => {
  const projects = useProjects();
  const { title } = useParams();

  const selectedProject = projects.find((item) => {
    return item.title.toLowerCase() === title?.toLowerCase();
  });

  return (
    <>
      <Container maxW="container.xl">
        <Navbar />
        <Box>
          <Box mt="100px" borderRadius="20px" height="800px" overflow="hidden">
            <Heading color="white" textAlign="center" pt="30px">
              {selectedProject?.title}
            </Heading>
            <Image mt="50px" src={selectedProject?.image} borderRadius="10px" />
          </Box>
          <Box display="flex" gap="8">
            <Box
              flex="1"
              backgroundColor="#161b22"
              borderRadius="20px"
              mt="30px"
              p="10"
            >
              <Heading color="white" fontSize="xl" mb="20x">
                Tools
              </Heading>
              <SimpleGrid columns={3} gap="3" mt="20px">
                {selectedProject?.tools.map((item) => (
                  <Button
                    variant="outline"
                    color="#929b8d"
                    borderRadius="50px"
                    borderColor="white"
                    colorScheme=""
                  >
                    {item}
                  </Button>
                ))}
              </SimpleGrid>
            </Box>
            <Box
              flex="2"
              backgroundColor="#161b22"
              borderRadius="20px"
              mt="30px"
              p="10"
            >
              <Heading color="white" fontSize="xl">
                Description
              </Heading>
              <Text color="white" mt="20px">
                {selectedProject?.fullDescription}
              </Text>
              <Flex mt="20px" gap="5">
                <Link href={selectedProject?.liveLink} target="_blank">
                  <Button
                    rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                    alignItems="center"
                    bgColor="#56d364"
                    _hover={{ backgroundColor: "#1D8678" }}
                  >
                    Live Link
                  </Button>
                </Link>

                <Link href={selectedProject?.githubLink} target="_blank">
                  <Button
                    rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                    bgColor="#56d364"
                    _hover={{ backgroundColor: "#1D8678" }}
                  >
                    Github Link
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Hero;

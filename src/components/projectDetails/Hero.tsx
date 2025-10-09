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
import { AnimationBox } from "../../animations/AnimationBox";
import { FaArrowRight } from "react-icons/fa";

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
        <AnimationBox>
          <Box
            mt="100px"
            borderRadius="20px"
            height={{ base: "", md: "", lg: "800px" }}
            overflow="hidden"
          >
            <Heading color="white" textAlign="center" pt="30px">
              {selectedProject?.title}
            </Heading>
            <Image mt="50px" src={selectedProject?.image} borderRadius="10px" />
          </Box>
          <AnimationBox display={{ base: "block", md: "flex" }} gap="8">
            <Box
              flex="1"
              backgroundColor="#161b22"
              borderRadius="20px"
              mt={{ base: "30px", md: "30px" }}
              p="10"
            >
              <Heading color="white" fontSize="xl" mb="20x">
                Tools
              </Heading>
              <SimpleGrid columns={{ base: 2, lg: 3 }} gap="3" mt="20px">
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
              <Box display={{ base: "block", md: "flex" }} mt="20px" gap="5">
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
                {selectedProject?.githubLink && (
                  <Link href={selectedProject?.githubLink} target="_blank">
                    <Button
                      rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                      bgColor="#56d364"
                      _hover={{ backgroundColor: "#1D8678" }}
                      ml={{ base: "7px", md: "0px" }}
                    >
                      Github Link
                    </Button>
                  </Link>
                )}
                {selectedProject?.storeFrontOne && (
                  <Link href={selectedProject?.storeFrontOne} target="_blank">
                    <Button
                      rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                      bgColor="#56d364"
                      _hover={{ backgroundColor: "#1D8678" }}
                      mt={{ base: "20px", md: "0px" }}
                    >
                      Ngemi Homecoming Store
                    </Button>
                  </Link>
                )}

                {selectedProject?.storeFrontTwo && (
                  <Link href={selectedProject?.storeFrontTwo} target="_blank">
                    <Button
                      rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                      bgColor="#56d364"
                      _hover={{ backgroundColor: "#1D8678" }}
                      mt={{ base: "20px", md: "0px" }}
                    >
                      Blaqfiti Store
                    </Button>
                  </Link>
                )}
              </Box>
            </Box>
          </AnimationBox>

          <Box backgroundColor="#161b22" borderRadius="20px" mt="30px" p="10">
            <Heading color="white" fontSize="xl" mb="10px">
              Deliverables
            </Heading>

            <AnimationBox>
              {selectedProject?.deliverables.map((del, index) => (
                <Flex
                  key={index}
                  color="#929b8d"
                  gap="2"
                  alignItems="center"
                  mt="20px"
                >
                  <FaArrowRight />
                  <Text>{del}</Text>
                </Flex>
              ))}
            </AnimationBox>
          </Box>
        </AnimationBox>
      </Container>
    </>
  );
};

export default Hero;

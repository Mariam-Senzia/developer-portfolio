import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      image: "/projects/DukaNext-UI.png",
      title: "DukaNext",
      description:
        "An eCommerce platform that enables shop owners to create, customize and manage their own online stores",
    },
    {
      image: "/projects/BlogNest-UI.png",
      title: "BlogNest",
      description:
        "A blog platform where users can view blogs, filter them by category, and publish their own after signing in",
    },
    {
      image: "/projects/Safiri-Africa-UI.png",
      title: "Safiri Africa",
      description:
        "A centralized platform where travelers can access comprehensive and unlimited information about African travel destinations",
    },
  ];
  return (
    <>
      <Container maxW="container.xl">
        <Box backgroundColor="#161b22" borderRadius="20px" mt="30px">
          <Heading color="white" textAlign="center" pt="35px">
            Projects
          </Heading>
          <Text color="#929b8d" textAlign="center" mt="15px" fontSize="lg">
            A glimpse into what I&apos;ve been building, driven by curiosity
          </Text>
          <Text color="#929b8d" textAlign="center" mt="" fontSize="lg">
            and a passion for creating practical web applications.
          </Text>

          <Grid templateColumns="repeat(3,1fr)" gap="8" px="40px" py="45px">
            {projects.map((item, index) => (
                <Link href="/projectDetails">  
                    <Card key={index} maxW="xl" variant="outline" borderColor="#26272B" backgroundColor="#121214" p="0" _hover={{
                        transform: "scale(1.03)"}} transition="all 0.3s ease-in-out" >
                        <CardBody p="0">
                        <Image
                            src={item.image}
                            alt={item.title}
                            borderRadius="lg"
                            borderBottomRadius="0"
                            height="250px"
                        />
                        <Stack mt="6" spacing="3" p="5">
                            <Heading size="md" color="white">{item.title}</Heading>
                            <Text color="#929b8d">
                            {item.description}
                            </Text>
                        </Stack>
                        </CardBody>
                        <Flex mt="-10px" p="2" mb="15px">
                            <Button variant="ghost" color="#669cbf" colorScheme="" _hover={{color:"#56d364"}}>
                            View Project
                            </Button>
                            <Box mt="16px" ml="-8px">
                            <FaArrowRight color="#669cbf" size="10px"/>
                            </Box>
                        </Flex>
                    </Card>
              </Link>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Projects;

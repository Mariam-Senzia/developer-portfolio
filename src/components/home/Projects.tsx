import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaGreaterThan } from "react-icons/fa6";

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
              <Card key={index} maxW="xl" variant="outline" borderColor="#26272B" backgroundColor="#161b22" p="0">
                <CardBody p="0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius="lg"
                    height="250px"
                  />
                  <Stack mt="6" spacing="3" p="5">
                    <Heading size="md" color="white">{item.title}</Heading>
                    <Text color="#929b8d">
                      {item.description}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                    <Button variant="ghost" color="#669cbf" colorScheme="">
                      View Project
                    </Button>
                    <Box mt="16px" ml="-8px">
                    <FaArrowRight color="#669cbf" size="10px"/>
                    </Box>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Projects;

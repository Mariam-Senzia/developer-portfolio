import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  IconButton,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { AnimationBox } from "../../animations/AnimationBox";

const OpenSource = () => {
  return (
    <Container maxW="container.xl">
      <AnimationBox
        backgroundColor="#161b22"
        borderRadius="20px"
        mt="30px"
        p={{ base: "6", md: "10" }}
      >
        <Heading color="white" textAlign="center" fontSize="3xl" mt="10px">
          Open Source Contribution
        </Heading>

        <Divider display={{ base: "block", md: "none" }} mt="10px" />

        <Box display={{ base: "block", md: "flex" }} gap="5" mt="15px">
          <Box display={{ base: "none", md: "flex" }}>
            <IconButton aria-label="coding laptop" bgColor="white">
              <FaTools color="#56d364" fontSize="20px" />
            </IconButton>
          </Box>

          <Box>
            <Heading color="white" fontSize="lg">
              Creative Commons Search Portal
            </Heading>
            <UnorderedList>
              <ListItem color="#929b8d" mt="10px">
                Contributed to Creative Commons Search Portal, an open source
                project by the Creative Commons organization.
              </ListItem>
              <ListItem color="#929b8d" mt="10px">
                Fixed UI spacing issue between the search bar and search button{" "}
                <Link
                  href="https://github.com/creativecommons/search/issues/235"
                  target="_blank"
                  color="#56d364"
                  _hover={{ color: "#46ad52" }}
                >
                  (Issue #235)
                </Link>{" "}
                , improving layout consistency across screen sizes.
              </ListItem>
              <ListItem color="#929b8d" mt="10px">
                Pull request was reviewed by maintainers and successfully
                merged.
              </ListItem>
            </UnorderedList>

            <Link
              href="https://github.com/creativecommons/search/pull/243"
              target="_blank"
            >
              <Button
                rightIcon={<ExternalLinkIcon mt="-2px" fontSize="md" />}
                mt="20px"
                bgColor="#56d364"
                transition=" all 0.3s ease-in-out"
                _hover={{
                  backgroundColor: "#46ad52",
                  transform: "translateY(-0.1rem)",
                }}
              >
                View PR #243
              </Button>
            </Link>
          </Box>
        </Box>
      </AnimationBox>
    </Container>
  );
};

export default OpenSource;

import {
  Button,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import MotionCard from "../../animations/MotionCard";
import { FaArrowRight } from "react-icons/fa6";

type ProjectItem = {
  title: string;
  image: string;
  description: string;
};

type ProjectsCardProps = {
  item: ProjectItem;
  index: number;
};

export default function ProjectCard({ item, index }: ProjectsCardProps) {
  return (
    <>
      <Link href={`/projectDetails/${item.title}`}>
        <MotionCard
          key={index}
          maxW="xl"
          height="100%"
          variant="outline"
          // borderColor="#26272B"
          borderColor="#222"
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
              objectFit="cover"
              borderRadius="lg"
              borderBottomRadius="0"
              width="100%"
              height={{ base: "160px", md: "250px" }}
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
              rightIcon={<FaArrowRight color="#669cbf" size="10px" />}
              variant="ghost"
              color="#669cbf"
              colorScheme=""
              _hover={{ color: "#56d364" }}
            >
              View Project
            </Button>
          </Flex>
        </MotionCard>
      </Link>
    </>
  );
}

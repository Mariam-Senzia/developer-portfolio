import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
import useTestimonials from "../../hooks/useTestimonials";
import { AnimationBox } from "../../animations/AnimationBox";

const Testimonials = () => {
  const testimonials = useTestimonials();

  return (
    <>
      <Container maxW="container.xl">
        <Box
          backgroundColor="#161b22"
          borderRadius="20px"
          p="10"
          mt="30px"
          textAlign="center"
        >
          <AnimationBox>
            <Text color="white" fontSize="2xl" fontWeight="bold">
              Testimonials
            </Text>

            {testimonials.map((item, index) => (
              <Box key={index} mt="30px" mx="20">
                <Avatar src={item.image} />
                <Text color="#929b8d" fontSize="lg" mt="20px">
                  {item.testimonial}
                </Text>
                <Text color="white" fontSize="lg" mt="20px">
                  {item.name}
                </Text>
                <Flex gap="2" justifyContent="center">
                  <Text color="#929b8d" fontSize="lg">
                    {item.position},
                  </Text>
                  <Text color="#929b8d" fontSize="lg">
                    {item.company}
                  </Text>
                </Flex>
              </Box>
            ))}
          </AnimationBox>
        </Box>
      </Container>
    </>
  );
};

export default Testimonials;

import {
  Button,
  CardBody,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useCertificates from "../../hooks/useCertificates";
import MotionGrid from "../../animations/MotionGrid";
import MotionCard from "../../animations/MotionCard";
import { AnimationBox } from "../../animations/AnimationBox";

const Certificates = () => {
  const certs = useCertificates();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="container.xl">
        <AnimationBox
          backgroundColor="#161b22"
          borderRadius="20px"
          mt="30px"
          p="10"
        >
          <Heading color="white" textAlign="center" fontSize="3xl">
            Certificates
          </Heading>
          <MotionGrid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap="6"
            // px="40px"
            py="45px"
          >
            {certs.map((item, index) => (
              <MotionCard
                key={index}
                maxW="xl"
                height="100%"
                variant="outline"
                borderColor="#555"
                backgroundColor="eee"
                p="3"
                overflow="hidden"
                onClick={onOpen}
              >
                <CardBody p="0">
                  <Image
                    src={item.url}
                    alt={item.url}
                    borderRadius="lg"
                    height="250px"
                    width="100%"
                    transition="all 0.4s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </CardBody>

                <Modal
                  id="cert-modal"
                  isOpen={isOpen}
                  onClose={onClose}
                  size="3xl"
                >
                  <ModalOverlay bg="#ffffff1A" backdropFilter="blur(10px)" />
                  <ModalContent className="modal-content">
                    <ModalBody>
                      <Image src={item.url} alt={item.url} />
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        bgColor="#56d364"
                        borderColor="#56d364"
                        border="0"
                        _hover={{ backgroundColor: "#1D8678" }}
                        mr={3}
                        onClick={onClose}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </MotionCard>
            ))}
          </MotionGrid>
        </AnimationBox>
      </Container>
    </>
  );
};

export default Certificates;

import { Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Image, Link, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null);

  return (
    <>
      <Container maxW='container.xl' position="fixed" zIndex="10" top="0" left="0" right="0" backgroundColor="black">
        <Box display={{base: "none", md: 'flex'}} justifyContent='space-between' alignItems='center' height="100px">
          <Link href="/">
            <Image src="/logos/main-logo.png" height='140px' width='250px' alt='logo'/>
          </Link>
          <Box display='flex' gap='3'>
            <Link href="/">
              <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Home</Button>
            </Link>
            <Link href="/about">
              <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>About</Button>
            </Link>
            <Link href="/skills">
              <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Skills</Button>
            </Link>
            <Link href="/projects">
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Projects</Button>
            </Link>
          </Box>
          <Link href="mailto:mariamsenzia@gmail.com">
            <Button color='white' variant='outline' borderColor='#353E45' _hover={{backgroundColor:'#56d364',color:'black'}}>Hire me</Button>
          </Link>
        </Box>

        {/* mobile layout */}
        <Box display={{base: "flex",md: "none"}} justifyContent='space-between' alignItems='center' height="100px">
          <Link href="/">
            <Image src="/logos/main-logo.png" height='140px' width='250px' alt='logo'/>
          </Link>
          <IconButton ref={btnRef} onClick={onOpen} aria-label="open menu" icon={<FaBars />} color="#969696" variant="outline" borderColor="#969696" />

          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="black">
              <DrawerCloseButton color="#CACCCE" />
              <DrawerHeader color="#CACCCE" mt="40px">Menu</DrawerHeader>

              <DrawerBody>
                <Divider borderColor="#969696" />
                <Link href="/">
                  <Button color='#969696' variant='ghost' backgroundColor='black' py="30px" _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Home</Button>
                </Link>
                <Divider borderColor="#969696" />
                <Link href="/about">
                  <Button color='#969696' variant='ghost' backgroundColor='black' py="30px" _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>About</Button>
                </Link>
                <Divider borderColor="#969696" />
                <Link href="/skills">
                  <Button color='#969696' variant='ghost' backgroundColor='black' py="30px" _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Skills</Button>
                </Link>
                <Divider borderColor="#969696" />
                <Link href="/projects">
                <Button color='#969696' variant='ghost' backgroundColor='black' py="30px" _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Projects</Button>
                </Link>
                <Divider borderColor="#969696" />
              </DrawerBody>

              <DrawerFooter>
                <Button bgColor="#56d364" mr={3} onClick={onClose} _hover={{backgroundColor:"#1D8678"}}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;

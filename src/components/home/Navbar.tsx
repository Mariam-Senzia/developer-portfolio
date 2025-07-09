import { Box, Button, Container, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Container maxW='container.xl' position="fixed" zIndex="10" top="0" left="0" right="0" backgroundColor="black">
        <Box display='flex' justifyContent='space-between' alignItems='center' height="100px">
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
      </Container>
    </>
  );
};

export default Navbar;

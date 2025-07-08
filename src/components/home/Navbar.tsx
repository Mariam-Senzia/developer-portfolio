import { Box, Button, Container, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Container maxW='container.xl'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Link href="/">
            <Image mt='-3' src="/logos/main-logo.png" height='140px' width='250px' alt='logo'/>
          </Link>
          <Box display='flex' gap='3' mt='-3'>
            <Link href="/">
              <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Home</Button>
            </Link>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>About</Button>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Skills</Button>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Projects</Button>
          </Box>
          <Link href="mailto:mariamsenzia@gmail.com">
            <Button mt='-3' color='white' variant='outline' borderColor='#353E45' _hover={{backgroundColor:'#56d364',color:'black'}}>Hire me</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;

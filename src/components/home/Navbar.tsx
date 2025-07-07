import { Box, Button, Container, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Container maxW='container.xl'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Image mt='-3' src="/logo1.png" height='140px' width='250px' alt='logo'/>
          <Box display='flex' gap='6' mt='-3'>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Home</Button>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>About</Button>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Skills</Button>
            <Button color='#CACCCE' variant='ghost' backgroundColor='black' _hover={{backgroundColor:'black', textDecoration:'underline',textUnderlineOffset:'5px',color:'#56d364'}}>Projects</Button>
          </Box>
          <Button mt='-3' color='white' variant='outline' borderColor='#353E45' _hover={{backgroundColor:'#56d364',color:'black'}}>Hire me</Button>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;

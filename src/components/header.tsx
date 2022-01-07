import { Box, Heading } from '@chakra-ui/react';
import { NavBar } from '../features/nav-bar/nav-bar';

export const Header = () => {
  return (
    <Box as={'header'}>
      <Heading as={'h1'}></Heading>
      <NavBar />
    </Box>
  );
};

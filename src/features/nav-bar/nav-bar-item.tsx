import { Box } from '@chakra-ui/react';

interface Props {
  title: string;
  selected: boolean;
}

export const NavBarItem = (props: Props) => {
  return props.selected ?
    <Box as={'a'} fontWeight={'bold'}>{props.title}</Box>
    :
    <Box as={'a'}>{props.title}</Box>
  ;
};

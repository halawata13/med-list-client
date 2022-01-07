import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const Main = (props: PropsWithChildren<{}>) => {
  return (
    <Box as={'main'}>{props.children}</Box>
  );
};

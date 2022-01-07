import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavBarItem } from './nav-bar-item';

export const NavBar = () => {
  const router = useRouter();

  return (
    <Box as={'nav'}>
      <Box>
        <Link href={'/'} passHref={true}>
          <NavBarItem title={'使用中'} selected={router.asPath === '/'} />
        </Link>
        <Link href={'/stock'} passHref={true}>
          <NavBarItem title={'保管中'} selected={router.asPath === '/stock'} />
        </Link>
      </Box>
      <Link href={'/create'} passHref={true}>
        <NavBarItem title={'追加する'} selected={router.asPath === '/create'} />
      </Link>
    </Box>
  );
};

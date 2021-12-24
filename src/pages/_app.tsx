import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import axios from 'axios';
import { SWRConfig, SWRConfiguration } from "swr";
import { environment } from '../../config/environment';
import CsrComponent from '../components/csr-component';
import { ChakraProvider } from '@chakra-ui/react';

const swrConfig: SWRConfiguration = {
  fetcher: args => axios.get(environment.apiUrl + args).then(res => res.data),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CsrComponent>
      <SWRConfig value={swrConfig}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SWRConfig>
    </CsrComponent>
  );
}

export default MyApp;

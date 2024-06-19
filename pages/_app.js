import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../components';
import '../css/index.css';
import { sitename } from '../site.config';
import { ThemeProvider } from 'next-themes';

const Root = (props) => {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="shortcut icon" sizes="any" href="/favicon.ico" type="image/png" />
        <link rel="icon" sizes="any" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" sizes="32x32" href="/images/favicon.png" type="image/png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Component {...pageProps} />
        </ThemeProvider>
        <Toaster />
      </QueryClientProvider>
    </>
  );
};

export default Root;

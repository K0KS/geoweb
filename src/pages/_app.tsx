import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import { useEffect, useState } from 'react';

import { Settings } from '@src/components/features/settings';
import { Layout } from '@src/components/templates/layout/layout';
import { ContentfulContentProvider } from '@src/contentful-context';
import { queryConfig } from '@src/lib/gql-client';
import colorfulTheme from '@src/theme';
import contentfulConfig from 'contentful.config';
import nextI18nConfig from 'next-i18next.config';
import { Navigation } from '@src/components/molecules/navigation';
import { Footer } from '@src/components/molecules/footer';
import { Box } from '@mui/material';

const LivePreviewProvider = ({ children, previewActive, locale }) => {
  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

type CustomPageProps = SSRConfig & { dehydratedState: DehydratedState; err: Error };

const CustomApp = ({
  Component,
  router,
  pageProps: originalPageProps,
}: AppProps<CustomPageProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  const { dehydratedState, err, ...pageProps } = originalPageProps;

  useEffect(() => {
    // when component is mounting we remove server side rendered css:
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  if (err) {
    return <div>Error: {err.message}</div>;
  }

  return (
    <ContentfulContentProvider router={router}>
      {({ previewActive, locale }) => (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydratedState}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={colorfulTheme}>
                <LivePreviewProvider previewActive={previewActive} locale={locale}>
                  <CssBaseline />
                  <Layout>
                    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                      <Navigation />
                      <Box component="main" sx={{ flex: 1 }}>
                        <Component {...pageProps} />
                      </Box>
                      <Footer />
                    </Box>
                  </Layout>
                  {contentfulConfig.contentful?.usePreviewApi && <Settings />}
                  <ReactQueryDevtools />
                </LivePreviewProvider>
              </ThemeProvider>
            </StyledEngineProvider>
          </Hydrate>
        </QueryClientProvider>
      )}
    </ContentfulContentProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);

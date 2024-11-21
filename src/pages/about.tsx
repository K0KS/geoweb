import { Container, Typography, Box } from '@mui/material';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Layout from '@/components/Layout';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
};

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box component="section">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          About Our Department
        </Typography>
        <Typography variant="body1" paragraph>
          The Department of Geoecology was formally established in June 2007, specializing in the applications
          of Geographical Information Systems (GIS) and Remote sensing (RS) methods in vegetation ecology.
        </Typography>
        <Typography variant="body1" paragraph>
          Our department is equipped with complete software for vector and raster data processing and analyses.
        </Typography>
      </Box>
    </Layout>
  );
};

export default AboutPage;

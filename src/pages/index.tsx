import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Layout } from '@src/components/templates/layout';
import { Hero } from '@src/components/molecules/hero';
import { FeatureCard } from '@src/components/molecules/feature-card';
import { ResearchArea } from '@src/components/molecules/research-area';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
}));

const HomePage = () => {
  const { t } = useTranslation();

  const researchAreas = [
    {
      title: 'Forest Microclimate',
      description: 'Study of microclimate within forests and its influence on plant and forest dynamics',
      icon: '🌳',
    },
    {
      title: 'Spatio-temporal Changes',
      description: 'Investigation of changes in plant populations and communities across different spatial scales',
      icon: '📊',
    },
    {
      title: 'Invasive Species Detection',
      description: 'Using remote sensing and UAV technology to detect and monitor invasive species',
      icon: '🛩️',
    },
    {
      title: 'Plant Spatial Patterns',
      description: 'Exploration of spatial patterns of plants and underlying biological processes',
      icon: '🌿',
    },
  ];

  return (
    <Layout>
      <Hero
        title="Department of Geoecology"
        subtitle="Applications of GIS and Remote Sensing in Vegetation Ecology"
        backgroundImage="/images/hero-bg.jpg"
      />
      
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Welcome to the Department of Geoecology
        </Typography>

        <Grid container spacing={4}>
          {researchAreas.map((area, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ResearchArea
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" gutterBottom align="center">
            Our Expertise
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="GIS Analysis"
                description="Complete software suite for vector and raster data processing"
                icon="🗺️"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="Remote Sensing"
                description="Advanced equipment for precise position measurements and spectral analysis"
                icon="📡"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard
                title="Research Support"
                description="Supporting other research teams and projects of the institute"
                icon="🤝"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};

export default HomePage;

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Layout } from '@src/components/templates/layout';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const ResearchPage = () => {
  const { t } = useTranslation();

  const researchTopics = [
    {
      title: 'Forest Microclimate',
      description: 'We study the microclimate within forests and its influence on plant and forest dynamics. Our research focuses on understanding how forest structure affects local climate conditions and how these conditions influence biodiversity and ecosystem processes.',
      icon: '🌳',
    },
    {
      title: 'Spatio-temporal Changes',
      description: 'Using GIS, remote sensing, and models, we investigate changes in plant populations and communities across different spatial scales. This research helps us understand how landscapes evolve over time and respond to environmental changes.',
      icon: '📊',
    },
    {
      title: 'Invasive Species Detection',
      description: 'We employ remote sensing techniques, including UAV technology, to detect and monitor invasive species. This work is crucial for early detection and management of invasive plants that threaten native ecosystems.',
      icon: '🛩️',
    },
    {
      title: 'Plant Spatial Patterns',
      description: 'Our department explores the spatial patterns of plants and the biological processes that underlie these patterns. This research helps us understand how plants organize themselves in space and interact with their environment.',
      icon: '🌿',
    },
    {
      title: 'Historical Influences on Temperate Forests',
      description: 'We examine how historical factors have shaped temperate forests, combining historical data with modern analytical methods to understand long-term forest development and dynamics.',
      icon: '📚',
    },
    {
      title: 'Remote Sensing Applications',
      description: 'Using advanced remote sensing technologies and spectral analysis, we study vegetation characteristics and landscape patterns at various scales, from individual plants to entire ecosystems.',
      icon: '📡',
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Research Topics
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our research encompasses various aspects of vegetation ecology, utilizing modern geoinformatic technologies and methods. We focus on understanding plant communities, their spatial patterns, and their responses to environmental changes.
        </Typography>

        <Grid container spacing={4}>
          {researchTopics.map((topic, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledPaper elevation={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h1" sx={{ mr: 2, fontSize: '2.5rem' }}>
                    {topic.icon}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {topic.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {topic.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" gutterBottom>
            Research Equipment
          </Typography>
          <Typography variant="body1" paragraph>
            Our department is equipped with state-of-the-art technology for research:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" paragraph>
              Complete software suite for vector and raster data processing (ArcGIS, PCI Geomatica, eCognition Developer, ENVI)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Precise position measurement equipment (GeoExplorer series with varying accuracy levels)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Spectral Evolution Full Range Portable Spectroradiometer RS-3500
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Field mapping tool FieldMap
            </Typography>
          </ul>
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

export default ResearchPage;

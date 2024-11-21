import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Typography, Grid, Paper, Box, Link, Divider } from '@mui/material';
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

const ResourceLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const GisPage = () => {
  const { t } = useTranslation();

  const equipment = [
    {
      title: 'GeoExplorer 2008 XH',
      description: 'Sub-meter accuracy GPS device for precise field measurements',
    },
    {
      title: 'GeoExplorer GeoXH 6000',
      description: 'Advanced GPS device with decimeter accuracy',
    },
    {
      title: 'Trimble GeoExplorer Geo 7X',
      description: 'High-precision GPS device with Centimeter accuracy',
    },
    {
      title: 'FieldMap',
      description: 'Professional field mapping tool for vegetation surveys',
    },
    {
      title: 'Spectral Evolution RS-3500',
      description: 'Full Range Portable Spectroradiometer for remote sensing applications',
    },
  ];

  const software = [
    {
      name: 'ArcGIS',
      description: 'Complete GIS software suite with selected extensions for advanced spatial analysis',
    },
    {
      name: 'PCI Geomatica 2012',
      description: 'Remote sensing software with Orthoengine module for image processing',
    },
    {
      name: 'eCognition Developer 9.2',
      description: 'Object-based image analysis software for detailed classification',
    },
    {
      name: 'ENVI',
      description: 'Advanced software for processing and analyzing geospatial imagery',
    },
    {
      name: 'Agisoft Photoscan Professional',
      description: 'Photogrammetry software for creating 3D models from images',
    },
  ];

  const educationalResources = [
    {
      title: 'GIS Proba',
      description: 'Introductory course covering GIS basics and fundamental concepts',
      link: '#',
    },
    {
      title: 'GIS for Biological Applications',
      description: 'Specialized course focusing on GIS applications in biological research',
      link: '#',
    },
    {
      title: 'Advanced Methods in GIS',
      description: 'Advanced course covering complex GIS analysis and modeling techniques',
      link: '#',
    },
  ];

  return (
    <Layout>
      <>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            GIS Resources and Facilities
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 6 }}>
            Our department maintains state-of-the-art GIS facilities and provides comprehensive support for spatial data analysis and remote sensing applications.
          </Typography>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom>
              Equipment
            </Typography>
            <Grid container spacing={4}>
              {equipment.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <StyledPaper elevation={3}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom>
              Software
            </Typography>
            <Grid container spacing={4}>
              {software.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <StyledPaper elevation={3}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ my: 8 }} />

          <Box>
            <Typography variant="h3" gutterBottom>
              Educational Resources
            </Typography>
            <Grid container spacing={4}>
              {educationalResources.map((resource, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <StyledPaper elevation={3}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {resource.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {resource.description}
                    </Typography>
                    <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                      Learn more →
                    </ResourceLink>
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </>
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

export default GisPage;

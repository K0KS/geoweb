import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Typography, Grid, Paper, Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Layout } from '@src/components/templates/layout';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProjectCard = ({ title, period, description }: { title: string; period: string; description: string }) => (
  <StyledPaper elevation={3}>
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="subtitle2" color="primary" gutterBottom>
      {period}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </StyledPaper>
);

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const ourProjects = [
    {
      title: 'Forest Microclimate in Time and Space',
      period: '2023–2026',
      description: 'Investigation of forest microclimate variations and their ecological implications across temporal and spatial scales.',
    },
    {
      title: 'Linking Microclimate and Forest Dynamics',
      period: '2023–2025',
      description: 'Study of the relationships between microclimate conditions and forest ecosystem dynamics.',
    },
    {
      title: 'Mechanistic Scaling of Soil-Plant Hydrodynamics',
      period: '2024–2026',
      description: 'Research on water movement patterns between soil and plants at different scales.',
    },
  ];

  const involvedProjects = [
    {
      title: 'Alpine Plants Under Climate Change',
      period: '2024–2026',
      description: 'Study of alpine plant communities\' responses to climate change.',
    },
    {
      title: 'Center for Landscape and Biodiversity',
      period: '2021–2026',
      description: 'Collaborative research center focusing on landscape ecology and biodiversity conservation.',
    },
    {
      title: 'Macroecology of Plant Invasions',
      period: '2019–2024',
      description: 'Investigation of large-scale patterns in plant invasions.',
    },
  ];

  const pastProjects = [
    {
      title: 'Bohemian Switzerland',
      period: '2018–2022',
      description: 'Ecological research in Bohemian Switzerland National Park.',
    },
    {
      title: 'Disturbance in Tundra – Greenland',
      period: '2019',
      description: 'Study of ecological disturbances in Greenland tundra ecosystems.',
    },
    {
      title: 'Detection of Invasive Species Using UAV',
      period: '2014–2017',
      description: 'Development of drone-based methods for invasive species monitoring.',
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Research Projects
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Our Projects" />
            <Tab label="Projects Involved" />
            <Tab label="Past Projects" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {ourProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            {involvedProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={4}>
            {pastProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
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

export default ProjectsPage;

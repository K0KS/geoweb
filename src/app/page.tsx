import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { getClient } from '@/lib/contentful';
import Layout from '@/components/Layout';

async function getResearchTopics() {
  const client = getClient(false);
  const response = await client.getEntries({
    content_type: 'researchTopic',
    limit: 3,
  });
  return response.items;
}

async function getLatestProjects() {
  const client = getClient(false);
  const response = await client.getEntries({
    content_type: 'project',
    limit: 3,
    order: ['-sys.createdAt'],
  });
  return response.items;
}

export default async function Home() {
  const researchTopics = await getResearchTopics();
  const latestProjects = await getLatestProjects();

  return (
    <Layout>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Department of Geoecology
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Exploring the intersection of geography and ecology through innovative research
            and education in GIS and Remote Sensing.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Research Areas
        </Typography>
        <Grid container spacing={4}>
          {researchTopics.map((topic: any) => (
            <Grid item key={topic.sys.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {topic.fields.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {topic.fields.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 8 }}>
          Latest Projects
        </Typography>
        <Grid container spacing={4}>
          {latestProjects.map((project: any) => (
            <Grid item key={project.sys.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {project.fields.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.fields.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                  Status: {project.fields.status}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

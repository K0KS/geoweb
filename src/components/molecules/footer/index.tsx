import { FC } from 'react';
import { Container, Grid, Typography, Box, Link, styled } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email } from '@mui/icons-material';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  width: '40px',
  height: '40px',
  marginRight: theme.spacing(1),
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Department of Geoecology
              </Typography>
              <Typography variant="body2">
                Institute of Botany of the CAS
                <br />
                Zámek 1
                <br />
                CZ-252 43 Průhonice
                <br />
                Czech Republic
              </Typography>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/research">Research</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/gis">GIS Resources</FooterLink>
                <FooterLink href="/publications">Publications</FooterLink>
              </Box>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Box sx={{ mb: 2 }}>
                <SocialButton href="#" aria-label="Facebook">
                  <Facebook />
                </SocialButton>
                <SocialButton href="#" aria-label="Twitter">
                  <Twitter />
                </SocialButton>
                <SocialButton href="#" aria-label="LinkedIn">
                  <LinkedIn />
                </SocialButton>
                <SocialButton href="mailto:contact@example.com" aria-label="Email">
                  <Email />
                </SocialButton>
              </Box>
              <Typography variant="body2">
                Stay updated with our latest research and activities
              </Typography>
            </FooterSection>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            {currentYear} Department of Geoecology. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroWrapper = styled(Box)<{ backgroundimage: string }>(({ theme, backgroundimage }) => ({
  position: 'relative',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.7)',
    zIndex: -1,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  '& h1': {
    fontSize: '4rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  '& h2': {
    fontSize: '1.5rem',
    fontWeight: 400,
    marginBottom: theme.spacing(4),
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
}));

export const Hero: FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <HeroWrapper backgroundimage={backgroundImage}>
      <ContentWrapper maxWidth="lg">
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
        <Typography variant="h2" component="h2">
          {subtitle}
        </Typography>
      </ContentWrapper>
    </HeroWrapper>
  );
};

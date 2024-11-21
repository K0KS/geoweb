import { FC } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <StyledPaper elevation={3}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </StyledPaper>
  );
};

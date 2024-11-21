import { FC } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ResearchAreaProps {
  title: string;
  description: string;
  icon: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
}));

export const ResearchArea: FC<ResearchAreaProps> = ({ title, description, icon }) => {
  return (
    <StyledPaper elevation={2}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </StyledPaper>
  );
};

import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Team', path: '/team' },
  { label: 'Publications', path: '/publications' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Department of Geoecology
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <Button sx={{ color: '#fff' }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;

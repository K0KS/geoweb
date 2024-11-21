import { FC, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  cursor: 'pointer',
}));

const DrawerList = styled(List)(({ theme }) => ({
  width: 250,
}));

interface NavigationItem {
  label: string;
  path: string;
}

export const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Research', path: '/research' },
    { label: 'Projects', path: '/projects' },
    { label: 'GIS', path: '/gis' },
    { label: 'Publications', path: '/publications' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => router.pathname === path;

  const drawer = (
    <DrawerList>
      {navigationItems.map((item) => (
        <ListItem
          button
          key={item.path}
          component={Link}
          href={item.path}
          onClick={handleDrawerToggle}
          selected={isActive(item.path)}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </DrawerList>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href="/" passHref style={{ textDecoration: 'none', flexGrow: 1 }}>
              <Logo variant="h6">
                Department of Geoecology
              </Logo>
            </Link>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box>
                {navigationItems.map((item) => (
                  <Link key={item.path} href={item.path} passHref style={{ textDecoration: 'none' }}>
                    <NavButton
                      color={isActive(item.path) ? 'primary' : 'inherit'}
                      variant={isActive(item.path) ? 'contained' : 'text'}
                    >
                      {item.label}
                    </NavButton>
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

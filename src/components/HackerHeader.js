import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const HackerHeader = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: t('menu.home'), path: '/' },
    { text: t('menu.chart'), path: '/chart' },
    { text: t('menu.experience'), path: '/experience' }
  ];

  const drawer = (
    <List sx={{ bgcolor: 'background.paper' }}>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.1)'
            }
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      <ListItem>
        <LanguageSwitcher />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid #00ff00' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontFamily: '"Fira Code", monospace',
              color: 'primary.main',
              '&::after': {
                content: '"|"',
                animation: 'blink 1s infinite',
                marginLeft: '5px'
              }
            }}
          >
            {t('welcome')}
          </Typography>

          <div sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: 'primary.main',
                  mx: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
            <LanguageSwitcher />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'background.paper',
            borderRight: '1px solid #00ff00'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default HackerHeader; 
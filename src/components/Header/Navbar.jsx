import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src='https://media.discordapp.net/attachments/1164100152827580437/1306242932818575360/logo_transparent.png?ex=6735f508&is=6734a388&hm=be958d258e948cc2e8733ab3664a2272fc90b1d90d5556f76f434ce9a48ecf1f&=&format=webp&quality=lossless&width=1024&height=1024' alt='logo' style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Le Cube</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, alignItems: 'center' }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="/propos" style={{ textDecoration: 'none', color: 'inherit' }}>À propos</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4, alignItems: 'center' }}>
            <Typography onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>Accueil</Link>
            </Typography>
            <Typography onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link to="/propos" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>À propos</Link>
            </Typography>
            <Typography onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>Contact</Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Paramètres">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Utilisateur" src="https://cdn.pixabay.com/photo/2016/03/31/20/31/avatar-1295831_1280.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu} sx={{p: 2 }} >
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/20/31/avatar-1295831_1280.png" alt="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', paddingRight: 5 }} />
                    <Typography sx={{ textAlign: 'center' }}><strong>Grégory David</strong></Typography>
                </MenuItem>
                <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <PersonIcon sx={{ alignItems: 'center', mr: 1}}/>
                <Typography sx={{ textAlign: 'center' }}>Profil</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <SettingsIcon sx={{ alignItems: 'center', mr: 1}}/>
                <Typography sx={{ textAlign: 'center' }}>Paramètres</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <LogoutIcon sx={{ alignItems: 'center', mr: 1}}/>
                <Typography sx={{ textAlign: 'center' }}>Déconnexion</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

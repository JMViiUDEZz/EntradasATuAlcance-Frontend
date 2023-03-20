
// 
//   return (
//     <div>
//         <h2>Barra de navegacion</h2>
//     </div>
//   )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useUsuarios } from '@/hooks/useUsuarios';
import { AuthContext } from "@/context";
import { useContext } from "react";
import { useRouter } from 'next/router';

export const Navbar = () => {

  const { user } =  useContext(AuthContext); 
  console.log('usuario: ', user);

  const { asPath, push } = useRouter();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          {/* <Image src="/DM.png" width={80} height={60}  alt="logo" /> */}
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography> */}

            <Link href='/admin' passHref component={ NextLink } sx={{ flexGrow: 1 }}>
                    <Button sx={{ color: 'white'}}>
                    Entradas A Tu Alcance
                    </Button>
                    {/* { user?.fullName }/{ user?.email }/{ user.roles[0] } */}
            </Link>

          <Box flex={1} />
          {/* <Box component="nav" style={{color:'white'}} 
            sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}> */}

            <Link href='/categories' passHref component={ NextLink }>
                    {/* <Button sx={{ color: 'white'}}>Categories</Button> */}
                    <Button color={ asPath === '/categories' ? 'primary':'info'}>Categories</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/dates' passHref> */}

                <Link href='/dates' passHref component={ NextLink }>
                    {/* <Button sx={{ color: 'white'}}>Dates</Button> */}
                    <Button color={ asPath === '/dates' ? 'primary':'info'}>Dates</Button>
                 </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/events' passHref> */}

                <Link href='/events' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Events</Button> */}
                    <Button color={ asPath === '/events' ? 'primary':'info'}>Events</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/listings' passHref> */}

                <Link href='/listings' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Listings</Button> */}
                    <Button color={ asPath === '/listings' ? 'primary':'info'}>Listings</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/sales' passHref> */}

                <Link href='/sales' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Sales</Button> */}
                    <Button color={ asPath === '/sales' ? 'primary':'info'}>Sales</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/venues' passHref> */}

                <Link href='/venues' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Venues</Button> */}
                    <Button color={ asPath === '/venues' ? 'primary':'info'}>Venues</Button>
                 </Link>
          {/* <Typography>User: { user?.fullName }</Typography> */}

          <Link href='/' passHref component={ NextLink } sx={{ flexGrow: 1 }}>
                    <Button sx={{ color: 'white'}}>
                      <LogoutIcon />
                    </Button>
                    {/* { user?.fullName }/{ user?.email }/{ user.roles[0] } */}
            </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
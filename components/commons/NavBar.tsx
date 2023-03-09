import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from "next/image";
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

export const NavBar = () => {
  const { user } =  useContext(AuthContext); 
  console.log(user);
  return (
    <AppBar sx={{ backgroundColor:'green'}}>
        <Toolbar>
            <Image src="/favicon.ico" width={80} height={60}  alt="logo" />

            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
                    { user?.fullname }/{ user?.email }/{ user?.roles }
                    {/* { user.roles[0] } */}
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                <Link href='/categories' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categories</Button>
                </Link>
                <Link href='/dates' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Dates</Button>
                </Link>
                <Link href='/events' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Events</Button>
                </Link>
                <Link href='/listings' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Listings</Button>
                </Link>
                <Link href='/sales' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Sales</Button>
                </Link>
                <Link href='/venues' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Venues</Button>
                </Link>
                <Box flex={1} />
                
            </Box>
            <Box flex={1} />
            <Link href='/auth/login' passHref component={ NextLink }>
                <Button sx={{ color: 'white'}}>Login</Button>
            </Link>
            <Box flex={1} />
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )

  }
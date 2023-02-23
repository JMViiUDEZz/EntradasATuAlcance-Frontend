import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/admin/ategories' passHref component={ NextLink }>
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
            </Box>
            <Box flex={1} />
            <Box>
                <Typography>User: Jose Maria</Typography>
                <Link href='/' component={ NextLink }>
                     <LogoutIcon sx={{ color: 'white'}} />
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
  )

  }
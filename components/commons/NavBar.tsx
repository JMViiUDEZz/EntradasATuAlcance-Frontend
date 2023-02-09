import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from "next/image";

export const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor:'green'}}>
        <Toolbar>
            <Image src="/favicon.ico" width={80} height={60}  alt="logo" />

            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                <Link href='/categories' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
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
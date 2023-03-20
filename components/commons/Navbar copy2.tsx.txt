
import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

import { 
    // CartContext, 
    UiContext, AuthContext } from '../../context';

// import { 
//     CartContext,
//     // CartContext, 
//     UiContext } from '../../context';

export const Navbar = () => {
    const { user } =  useContext(AuthContext); 

    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext( UiContext );
    // const { numberOfItems } = useContext( CartContext );

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        push(`/search/${ searchTerm }`);
    }

    

    return (
        <AppBar>
            <Toolbar>
                {/* <NextLink href='/' passHref> */}
                    <Link display='flex' alignItems='center' href='/' passHref component={ NextLink }>
                        <Typography sx={{ color: 'white'}} variant='h6'>Entradas A Tu Alcance</Typography>
                        {/* <Typography sx={{ ml: 0.5 , color: 'white' }} >|</Typography> */}
                    </Link>  
                    { user?.fullname }/{ user?.email }/{ user?.role }

                {/* </NextLink> */}

                <Box flex={ 1 } />
                
                <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block'} }}
                className="fadeIn">

 
                    {/* <NextLink href='/category/men' passHref>
                        <Link>
                            <Button color={ asPath === '/category/men' ? 'primary':'info'}>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button color={ asPath === '/category/women' ? 'primary':'info'}>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kid' passHref>
                        <Link>
                            <Button color={ asPath === '/category/kid' ? 'primary':'info'}>Niños</Button>
                        </Link>
                    </NextLink>  */}
                
                {/* <Link href='/categories' component={ NextLink }> */}
                    {/* <Button sx={{ color: 'white'}}>Categories</Button> */}
                {/* </Link> */}

                {/* <NextLink href='/categories' passHref> */}
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
                {/* </NextLink> */}

                </Box>


                <Box flex={ 1 } />
                
                

                {/* Pantallas pantallas grandes */}
                {/* {
                    isSearchVisible 
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={ searchTerm }
                                onChange={ (e) => setSearchTerm( e.target.value ) }
                                onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={ () => setIsSearchVisible(false) }
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                    : 
                    (
                        <IconButton 
                            onClick={ () => setIsSearchVisible(true) }
                            className="fadeIn"
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >
                            <SearchOutlined />
                        </IconButton>
                    )
                } */}


                {/* Pantallas pequeñas */}
                {/* <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={ toggleSideMenu }
                >
                    <SearchOutlined />
                </IconButton> */}

                {/* <NextLink href="/cart" passHref> */}
                    {/* <Link href="/cart" passHref component={ NextLink } > */}
                        {/* <IconButton> */}
                            {/* <Badge badgeContent={ numberOfItems > 9 ? '+9': numberOfItems  } color="secondary"> */}
                                {/* <ShoppingCartOutlined /> */}
                            {/* </Badge> */}
                        {/* </IconButton> */}
                    {/* </Link> */}
                {/* </NextLink> */}


                {/* <Button onClick={ toggleSideMenu }>
                    Menú
                </Button> */}

            </Toolbar>
        </AppBar>
    )
}

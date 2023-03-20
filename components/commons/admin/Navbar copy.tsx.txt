import { useContext, useState } from 'react';
import NextLink from 'next/link';


import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';


import { AuthContext, UiContext } from '../../../context';
import { useRouter } from 'next/router';

export const AdminNavbar = () => {

    // const { toggleSideMenu } = useContext( UiContext );
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
                    <Link display='flex' alignItems='center' href='/' passHref component={NextLink}>
                        <Typography variant='h6'>Entradas |</Typography>
                        <Typography sx={{ ml: 0.5 }}>A Tu Alcance ADMIN</Typography>
                    </Link>  
                {/* </NextLink> */}

                <Box flex={ 1 } />
               <Link href='/admin/categories' passHref component={ NextLink }>
                    {/* <Button sx={{ color: 'white'}}>Categories</Button> */}
                    <Button color={ asPath === '/admin/categories' ? 'primary':'info'}>Categories</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/dates' passHref> */}

                <Link href='/admin/dates' passHref component={ NextLink }>
                    {/* <Button sx={{ color: 'white'}}>Dates</Button> */}
                    <Button color={ asPath === '/admin/dates' ? 'primary':'info'}>Dates</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/events' passHref> */}

                <Link href='/admin/events' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Events</Button> */}
                    <Button color={ asPath === '/admin/events' ? 'primary':'info'}>Events</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/listings' passHref> */}

                <Link href='/admin/listings' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Listings</Button> */}
                    <Button color={ asPath === '/admin/listings' ? 'primary':'info'}>Listings</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/sales' passHref> */}

                <Link href='/admin/sales' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Sales</Button> */}
                    <Button color={ asPath === '/admin/sales' ? 'primary':'info'}>Sales</Button>
                </Link>
                {/* </NextLink> */}
                {/* <NextLink href='/venues' passHref> */}

                <Link href='/admin/venues' passHref component={ NextLink } >
                    {/* <Button sx={{ color: 'white'}}>Venues</Button> */}
                    <Button color={ asPath === '/admin/venues' ? 'primary':'info'}>Venues</Button>
                </Link>
                {/* </NextLink> */}


                <Box flex={ 1 } />
                
                
                <Button onClick={ toggleSideMenu }>
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}
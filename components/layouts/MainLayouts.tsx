import React, { FC } from 'react'
// import { Navbar } from '../../components/commons';
import Head from 'next/head';
import { SideMenu } from '../../components/ui';
import { Navbar } from '../commons/Navbar';

interface Props {
    children: any;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}
export const MainLayouts:FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
        {/* <header>
            <Navbar />
        </header> */}
        {/* <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer>
            <h2>Footer de la página</h2>
        </footer> */}

         {/* <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        {/* Footer */}
        {/* <footer> */}
            {/* TODO: mi custom footer */}
        {/* </footer> */} */
        {/* } */}


        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
            <Navbar />
        </nav>

        <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>


        
    </>
  )
}
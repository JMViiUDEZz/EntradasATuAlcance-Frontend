import Image from 'next/image';
import React, { FC } from 'react'
// import { Navbar } from '../../components/commons';
import { SideMenu } from '../ui';
import { Navbar } from '../commons';


interface Props {
    children: any;
}
export const PublicLayouts:FC<Props> = ({ children }) => {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
    </>
  )
}
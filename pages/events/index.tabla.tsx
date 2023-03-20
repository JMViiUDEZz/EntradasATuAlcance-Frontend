import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../components/layouts";
import { useEvents } from '../../hooks';
import { EventList } from '../../components/events';
// import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { events, isLoading } = useEvents ('/events');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", events);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
          <EventList events={ events }  />   
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
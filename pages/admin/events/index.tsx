import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useEvents } from '../../../hooks';
import { EventList } from '../../../components/events';
// import { Mundo } from '../../../components';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { events, isLoading } = useEvents ('/events');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", events);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* { */}
          {/* (isLoading ) */}
            ? <EventList events={ events }  /> 
            {/* // : <Mundo /> */}
  
        {/* // } */}
        {/* <h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
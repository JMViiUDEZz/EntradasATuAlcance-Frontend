import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { useEvents } from '../../hooks/useEvents';
import { EventList } from '../../components/events/eventList';
import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { events, isLoading } = useEvents ('/events');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", events);
    return (
      <MainLayouts>
        {
          (isLoading )
            ? <EventList events={ events }  /> 
            : <Mundo />
  
        }
        <h1>Entradas a tu alcance</h1>
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
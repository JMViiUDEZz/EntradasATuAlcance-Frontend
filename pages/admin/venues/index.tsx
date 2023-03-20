import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useVenues } from '../../../hooks/useVenues';
import { VenueList } from '../../../components/venues/venueList';
// import { Mundo } from '../../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { venues, isLoading } = useVenues ('/venues');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", venues);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* {
          (isLoading )
            ? */}
            <VenueList venues={ venues }  />  
            {/* : <Mundo />
  
        }
        <h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
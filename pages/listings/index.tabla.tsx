import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { useListings } from '../../hooks/useListings';
import { ListList } from '../../components/listings/listList';
import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { listings, isLoading } = useListings ('/listings');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", listings);
    return (
      <MainLayouts>
        {
          (isLoading )
            ? <ListList listings={ listings }  /> 
            : <Mundo />
  
        }
        <h1>Entradas a tu alcance</h1>
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
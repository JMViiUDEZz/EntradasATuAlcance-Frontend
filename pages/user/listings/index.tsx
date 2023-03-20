import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useListings } from '../../../hooks';
import { ListList } from '../../../components/listings';
// import { Mundo } from '../../../components';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { listings, isLoading } = useListings ('/listings');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", listings);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* {
          (isLoading )
            ? */}
            <ListList listings={ listings }  /> 
        {/* //     : <Mundo />
  
        // } */}
        {/* // <h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
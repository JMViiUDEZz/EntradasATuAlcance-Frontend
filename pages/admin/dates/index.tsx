import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useDates } from '../../../hooks';
import { DateList } from '../../../components/dates';
// import { Mundo } from '../../../components';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { dates, isLoading } = useDates ('/dates');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", dates);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* {
          (isLoading )
            ? */}
            
            <DateList dates={ dates }  /> 
{/*             
        //     : <Mundo />
  
        // } */}
        {/* /<h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
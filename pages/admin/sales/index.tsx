import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useSales } from '../../../hooks';
import { SaleList } from '../../../components/sales';
// import { Mundo } from '../../../components';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { sales, isLoading } = useSales ('/sales');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", sales);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* { */}
          {/* // (isLoading ) */}
            {/* // ?  */}
            <SaleList sales={ sales }  /> 
            {/* // : <Mundo /> */}
  
        {/* // } */}
        {/* // <h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
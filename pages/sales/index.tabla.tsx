import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { useSales } from '../../hooks/useSales';
import { SaleList } from '../../components/sales/saleList';
import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { sales, isLoading } = useSales ('/sales');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", sales);
    return (
      <MainLayouts>
        {
          (isLoading )
            ? <SaleList sales={ sales }  /> 
            : <Mundo />
  
        }
        <h1>Entradas a tu alcance</h1>
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
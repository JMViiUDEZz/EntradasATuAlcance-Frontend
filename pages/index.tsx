// import React from 'react';
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../components/layouts";


import { Typography } from '@mui/material';

// import { ShopLayout } from '../components/layouts';

// import { ProductList } from '../components/products';
// import { useProducts } from '../hooks';

// import { FullScreenLoading } from '../components/ui';
// import { UseCategories } from '../hooks/useCategories';
// import { CategoryList } from '../components/categories';
// import { Mundo } from '../components';
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  // const { categories, isLoading } = UseCategories ('/categories');
  // const respuesta = useAuth ('/auth');
//  console.log(respuesta);
  // console.log(isLoading, "c=", categories);
  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <Typography variant='h1' component='h1'>Entradas</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>A Tu Alcance</Typography>
      {/* {
        (isLoading )
          ? <CategoryList categories={ categories }  /> 
          : <Mundo />

      } */}
      
      {/* <h1>Entradas a tu alcance</h1> */}
    </MainLayouts>
  )
}

export default indexPage
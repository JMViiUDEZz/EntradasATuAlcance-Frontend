import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../components/layouts";
import { useCategories } from '../../hooks';
import { CategoryList } from '../../components/categories/categoryList';
// import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { categories, isLoading } = useCategories ('/categories');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", categories);
    return (
      <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        {/* {
          (isLoading ) */}
            {/* ?  */}
            <CategoryList categories={ categories }  /> 
            {/* : <Mundo /> */}
  
        {/* } */}
        {/* <h1>Entradas a tu alcance</h1> */}
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
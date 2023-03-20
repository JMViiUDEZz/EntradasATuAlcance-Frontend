import React from 'react'
import { Button } from "@mui/material";
// import { NextPage } from "next"
import { MainLayouts } from "../../../components/layouts";
import { useUsers } from '../../../hooks';
import { UserList } from '../../../components/users';
// import { Mundo } from '../../../components';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { users, isLoading } = useUsers ('/users');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", users);
    return (
      <MainLayouts  title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
          {/* (isLoading ) */}
          <UserList users={ users }  /> 
  
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
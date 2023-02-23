import React from 'react'
import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../../layouts";
import { useDates } from '../../hooks/useDates';
import { DateList } from '../../components/dates/dateList';
import { Mundo } from '../../components/Mundo';

const CategoriaIndex = () => {
  // const indexPage: NextPage = () => {
    const { dates, isLoading } = useDates ('/dates');
    // const respuesta = useAuth ('/auth');
  //  console.log(respuesta);
    console.log(isLoading, "c=", dates);
    return (
      <MainLayouts>
        {
          (isLoading )
            ? <DateList dates={ dates }  /> 
            : <Mundo />
  
        }
        <h1>Entradas a tu alcance</h1>
      </MainLayouts>
    )
  }  
// }


export default CategoriaIndex
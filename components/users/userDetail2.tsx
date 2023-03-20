import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IUser } from '@/interfaces';
import { AuthContext } from "@/context";
import { useContext } from "react";

interface Props {
    users: IUser[]
}
export const UserDetail2:FC<Props> = ({users}) => {

  const { user } =  useContext(AuthContext); 
  console.log('usuario: ', user);

  const rows = users;
  return (
    

    <table>

  <tr>

    <td>{ user?.fullname }</td>

    <td>Celda 2</td>

    <td>Celda 3</td>

  </tr>

  <tr>

    <td>Celda 4</td>

    <td>Celda 5</td>

    <td>Celda 6</td>

  </tr>

</table>

            
  )
}
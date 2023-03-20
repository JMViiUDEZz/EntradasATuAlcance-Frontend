import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IUser } from '@/interfaces';
interface Props {
  users: IUser[]
}
export const UserList:FC<Props> = ({users}) => {
  
  const colums: GridColDef[] = [
    { field: 'userid', headerName: 'userid', width: 130},
    { field: 'fullname', headerName:'fullname', width: 300 },
    { field: 'email', headerName: 'email', width: 100 },
    { field: 'role', headerName: 'role', width: 100 },
    { field: 'isActive', headerName: 'isActive', width: 100 },
    { field: 'password', headerName: 'password', width: 100 }
  ];
  const rows = users;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    // pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    // rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IUser ) => row.fullname}
                    // getRowId = {( row: IUser ) => row.userid}
                  />
               </Grid>
            </Grid>
  )
}
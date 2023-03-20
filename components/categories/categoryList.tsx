import { Box, Button, Grid, MenuItem, Link } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowId, GridRowParams } from '@mui/x-data-grid';
import { FC } from 'react';
import { ICategory } from '../../interfaces';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NextLink from 'next/link';
import eliminarRegistro from '@/api/eliminarRegistro';
import actualizarRegistro from '@/api/actualizarRegistro';

interface Props {
    categories: ICategory[];
    // catid: string;
}

export const CategoryList:FC<Props> = ({categories}) => {

  // const [selectedRow, setSelectedRow] = useState<ICategory | null>(null);

  // const handleEditar = (params: GridRowParams) => {
  //   setSelectedRow(params.row as ICategory);
  // };

  // const handleEditar = (params: GridRowParams) => {
  //   const catid = params.row.catid;
  //   const url = `/categories/update/${catid}`;
  //   window.location.href = url;
  // };

  const handleEditar = (params: GridRenderCellParams<any, any>) => {
    const catid = params.row.getFieldValue('catid');
    const url = `/categories/update/${catid}`;
    window.location.href = url;
  };

  // const handleActualizar = async () => {
  //   if (selectedRow) {
  //     const respuesta = await actualizarRegistro(selectedRow);
  //     console.log(respuesta);
  //     // Aquí podrías hacer algo con la respuesta, como actualizar la lista de registros
  //     setSelectedRow(null);
  //   }
  // };
  
  const handleEliminar = async (row: ICategory) => {
    const respuesta = await eliminarRegistro(row.catid);
    console.log (respuesta);
    // Aquí podrías hacer algo con la respuesta, como actualizar la lista de registros
  };
  const colums: GridColDef[] = [
        { field: 'catid', headerName: 'catid', width: 130},
        { field: 'catname', headerName:'catname', width: 300 },
        { field: 'catgroup', headerName: 'catgroup', width: 100 },
        { field: 'catdesc', headerName: 'catdesc', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: (params: GridRenderCellParams<any, any>) => (
              <>
                {/* <Link href='/categories/update' passHref component={ NextLink }> */}
                    <Button onClick={() => handleEditar(params)} sx={{ color: 'black'}}>
                      <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                    </Button>
                  {/* </Link> */}
                {/* <Link href='/categories/remove' passHref component={ NextLink }> */}
                    <Button onClick={() => handleEliminar(params.row as ICategory)} sx={{ color: 'black'}}>
                      <ClearIcon  sx={{ color: 'blue'}} />
                    </Button>
                  {/* </Link> */}
              </>
            ) 
        }
  ];
  const rows = categories;

  {}

  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                
                  <Link href='/categories/create' passHref component={ NextLink }>
                    <Button sx={{ color: 'black'}}>
                      <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
                    </Button>
                  </Link>
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
                    getRowId = {( row: ICategory ) => row.catid as GridRowId}
                  />
               </Grid>
            </Grid>
  )
}

// function useState<T>(arg0: T): [T, any] {
//   throw new Error('Function not implemented.');
// }

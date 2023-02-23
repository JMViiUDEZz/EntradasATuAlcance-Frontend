import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ISale } from '../../interfaces/sales/ISale';


interface Props {
    sales: ISale[]
}
export const CategoryList:FC<Props> = ({ sales }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>catid</TableCell>
                <TableCell>catgroup</TableCell>
                <TableCell>catname</TableCell>
                <TableCell>catdesc</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    sales.map((sale: ISale) => (
                        <TableRow key= { sale.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { sale.catid }
                            </TableCell>
                            <TableCell align="right">{sale.catgroup}</TableCell>
                            <TableCell align="right">{sale.catname}</TableCell>
                            <TableCell align="right">{sale.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
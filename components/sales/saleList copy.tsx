import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ISale } from '../../interfaces/sales/ISale';


interface Props {
    sales: ISale[]
}
export const SaleList:FC<Props> = ({ sales }) => {
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
                        <TableRow key= { sale.saleid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { sale.saleid }
                            </TableCell>
                            <TableCell align="right">{sale.pricepaid}</TableCell>
                            <TableCell align="right">{sale.commission}</TableCell>
                            <TableCell align="right">{sale.saletime}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
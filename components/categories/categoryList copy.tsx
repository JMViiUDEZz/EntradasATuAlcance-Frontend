import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICategory } from '../../interfaces/categories/ICategory';


interface Props {
    categories: ICategory[]
}
export const CategoryList:FC<Props> = ({ categories }) => {
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
                    categories.map((category: ICategory) => (
                        <TableRow key= { category.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { category.catid }
                            </TableCell>
                            <TableCell align="right">{category.catgroup}</TableCell>
                            <TableCell align="right">{category.catname}</TableCell>
                            <TableCell align="right">{category.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
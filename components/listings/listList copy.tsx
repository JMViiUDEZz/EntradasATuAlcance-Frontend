import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IList } from '../../interfaces/lists/IList';


interface Props {
    lists: IList[]
}
export const CategoryList:FC<Props> = ({ lists }) => {
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
                    lists.map((list: IList) => (
                        <TableRow key= { list.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { list.catid }
                            </TableCell>
                            <TableCell align="right">{list.catgroup}</TableCell>
                            <TableCell align="right">{list.catname}</TableCell>
                            <TableCell align="right">{list.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
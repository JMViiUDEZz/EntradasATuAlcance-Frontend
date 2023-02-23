import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IDate } from '../../interfaces/dates/IDate';


interface Props {
    dates: IDate[]
}
export const CategoryList:FC<Props> = ({ dates }) => {
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
                    dates.map((date: IDate) => (
                        <TableRow key= { date.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { date.catid }
                            </TableCell>
                            <TableCell align="right">{date.catgroup}</TableCell>
                            <TableCell align="right">{date.catname}</TableCell>
                            <TableCell align="right">{date.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
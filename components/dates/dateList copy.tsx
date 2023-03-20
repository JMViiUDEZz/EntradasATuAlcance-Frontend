import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IDate } from '../../interfaces';


interface Props {
    dates: IDate[]
}
export const DateList:FC<Props> = ({ dates }) => {
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
                        <TableRow key= { date.dateid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { date.dateid }
                            </TableCell>
                            <TableCell align="right">{date.month}</TableCell>
                            <TableCell align="right">{date.day}</TableCell>
                            <TableCell align="right">{date.year}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
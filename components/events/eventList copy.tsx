import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IEvent } from '../../interfaces/events/IEvent';


interface Props {
    events: IEvent[]
}
export const CategoryList:FC<Props> = ({ events }) => {
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
                    events.map((event: IEvent) => (
                        <TableRow key= { event.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { event.catid }
                            </TableCell>
                            <TableCell align="right">{event.catgroup}</TableCell>
                            <TableCell align="right">{event.catname}</TableCell>
                            <TableCell align="right">{event.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
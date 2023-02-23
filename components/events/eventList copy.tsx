import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IEvent } from '../../interfaces/events/IEvent';


interface Props {
    events: IEvent[]
}
export const EventList:FC<Props> = ({ events }) => {
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
                        <TableRow key= { event.eventid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { event.eventid }
                            </TableCell>
                            <TableCell align="right">{event.eventname}</TableCell>
                            <TableCell align="right">{event.starttime}</TableCell>
                            <TableCell align="right">{event.date}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
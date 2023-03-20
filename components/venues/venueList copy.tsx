import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IVenue } from '../../interfaces';


interface Props {
    venues: IVenue[]
}
export const VenueList:FC<Props> = ({ venues }) => {
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
                    venues.map((venue: IVenue) => (
                        <TableRow key= { venue.venueid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { venue.venueid }
                            </TableCell>
                            <TableCell align="right">{venue.venuename}</TableCell>
                            <TableCell align="right">{venue.venueseats}</TableCell>
                            <TableCell align="right">{venue.venuecity}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
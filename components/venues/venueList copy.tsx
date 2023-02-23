import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IVenue } from '../../interfaces/venues/IVenue';


interface Props {
    venues: IVenue[]
}
export const CategoryList:FC<Props> = ({ venues }) => {
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
                        <TableRow key= { venue.catid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { venue.catid }
                            </TableCell>
                            <TableCell align="right">{venue.catgroup}</TableCell>
                            <TableCell align="right">{venue.catname}</TableCell>
                            <TableCell align="right">{venue.catdesc}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IList } from '../../interfaces/listings/IList';


interface Props {
    lists: IList[]
}
export const ListList:FC<Props> = ({ lists }) => {
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
                        <TableRow key= { list.listid } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { list.listid }
                            </TableCell>
                            <TableCell align="right">{list.numtickets}</TableCell>
                            <TableCell align="right">{list.seller}</TableCell>
                            <TableCell align="right">{list.event}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
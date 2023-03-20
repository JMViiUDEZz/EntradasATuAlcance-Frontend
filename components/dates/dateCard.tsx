import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IDate } from "../../interfaces";
import NextLink  from 'next/link';

interface Props {
    date: IDate;
}
export const DateCard:FC<Props> = ({ date }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/dates/${date.dateid}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ date.caldate} alt={ date.day } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{date.holiday} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{date.month}</Typography>
            <Typography fontWeight={500}>{date.year}</Typography>
        </Box>
    </Grid>
  )
}
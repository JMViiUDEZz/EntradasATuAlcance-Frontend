import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IVenue } from "../../interfaces";
import NextLink  from 'next/link';

interface Props {
    venue: IVenue;
}
export const CategoryCard:FC<Props> = ({ venue }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/venues/${venue.venuecity}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ venue.venueid } alt={ venue.venuename } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{venue.venueseats} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{venue.venuestate}</Typography>
            <Typography fontWeight={500}>{venue.venuename}</Typography>
        </Box>
    </Grid>
  )
}
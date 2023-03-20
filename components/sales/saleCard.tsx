import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { ISale } from "../../interfaces";
import NextLink  from 'next/link';

interface Props {
    sale: ISale;
}
export const SaleCard:FC<Props> = ({ sale }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/sales/${sale.saleid}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ sale.seller } alt={ sale.saletime } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{sale.qtysold} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{sale.pricepaid}</Typography>
            <Typography fontWeight={500}>{sale.event}</Typography>
        </Box>
    </Grid>
  )
}
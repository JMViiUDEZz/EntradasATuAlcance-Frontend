import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IList } from "../../interfaces";
import NextLink  from 'next/link';

interface Props {
    list: IList;
}
export const CategoryCard:FC<Props> = ({ list }) => {
  return (
    <Grid item xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/lists/${list.listid}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ list.listtime } alt={ list.event } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{list.totalprice} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{list.seller}</Typography>
            <Typography fontWeight={500}>{list.totalprice}</Typography>
        </Box>
    </Grid>
  )
}
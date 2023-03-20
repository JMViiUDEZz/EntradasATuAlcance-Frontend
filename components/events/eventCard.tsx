import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { IEvent } from "../../interfaces";
import NextLink  from 'next/link';

interface Props {
    event: IEvent;
}
export const EventCard:FC<Props> = ({ event }) => {

  const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
          ? event.image[1]
          : event.image[0];

    }, [isHovered, event.image])

  return (
    <Grid item xs= {6} sm={3}
    onMouseEnter={ () => setIsHovered(true) } 
    onMouseLeave={ () => setIsHovered(false) }>
        <Card sx={{ width: '90%' }}>
          <Link href={`/events/${event.eventid}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ event.image } alt={ event.eventname } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        {/* <Typography fontWeight={500}>Precio</Typography>  */}
                        <Typography fontWeight={700}>{event.eventname}</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        {/* <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{event.starttime}</Typography>
            <Typography fontWeight={500}>{event.venue}</Typography>
        </Box> */}
    </Grid>
  )
}
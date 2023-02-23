import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react'
import { IDate } from '../../interfaces/dates/IDate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
interface Props {
    dates: IDate
}

const myLoader = ({src, width, quality}) =>{
  // return `https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/`
  return `${src}?s=${width}`
}
export const DateDetail:FC<Props> = ({date}) => {
    console.log(date);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} sx={{ border:0, width:'100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            loader={myLoader}
            src= {date.catname}
            alt={date.catdesc}
            width={300}
            height={300}
          />
          <Box display='flex' flexDirection='column' sx={{  width: '40%', p:3}} >
            <Typography variant='h5' component='h5'
                        sx={{ fontSize: '20px', textAlign: 'center', mb: '10px'}}
            > { date.catgroup}</Typography>
            <Box display='flex' flexDirection='row' >
              <Typography sx={{width: '40%'}}  variant='subtitle1' > ISBN </Typography>
              <Typography sx={{width: '60%'}}> {date.catid} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Paginas </Typography>
              <Typography sx={{width: '60%'}}> {date.catdesc} </Typography>
            </Box>
            <Box display='flex' flexDirection='row'>
              <Typography sx={{width: '40%'}}  variant='subtitle1' > Publicación </Typography>
              <Typography sx={{width: '60%'}}> {date.catgroup} </Typography>
            </Box>
          </Box>
          <Box  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
            <Typography variant='h4' component='h4'> { date.catname } </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a la cesta
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripcion" value="1" />
                <Tab label="Sinpsis" value="2" />
                <Tab label="Estado" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{date.catdesc}</TabPanel>
            <TabPanel value="2">{date.catgroup}</TabPanel>
            <TabPanel value="3">{date.catname}</TabPanel>
          </TabContext>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
              <Typography  variant='subtitle1' > Sinpsis </Typography>
              <Typography> {libro.shortDescription} </Typography>
        </Box> */}


      </Grid>
    </Grid>

  )
}
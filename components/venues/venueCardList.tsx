import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../venues";
import { IVenue } from '../../interfaces';

interface Props {
    venues: IVenue[]
}

export const VenueCardList:FC<Props> = ({ venues }) => {
  return (
    <Grid container spacing={4}>
      {
        venues.map( (venue ) => (
          <CategoryCard 
            venue = { venue }
            key = { venue.venueid }
          />
        ))
      }

    </Grid>
  )
}
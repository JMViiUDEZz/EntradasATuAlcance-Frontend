import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../venues/venueCard";
import { IVenue } from '../../interfaces/venues/IVenue';

interface Props {
    venues: IVenue[]
}

export const CategoryCardList:FC<Props> = ({ venues }) => {
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
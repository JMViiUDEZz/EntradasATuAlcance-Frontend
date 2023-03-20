import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../events";
import { IEvent } from '../../interfaces';

interface Props {
    events: IEvent[]
}

export const EventCardList:FC<Props> = ({ events }) => {
  return (
    <Grid container spacing={4}>
      {
        events.map( (event ) => (
          <CategoryCard 
            event = { event }
            key = { event.eventid }
          />
        ))
      }

    </Grid>
  )
}
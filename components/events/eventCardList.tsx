import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../events/eventCard";
import { IEvent } from '../../interfaces/events/IEvent';

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
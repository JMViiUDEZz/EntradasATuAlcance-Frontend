import { FC } from 'react'
import { Grid } from '@mui/material'
import { IEvent } from '../../interfaces'
import { EventCard } from '.'

interface Props {
    events: IEvent[];
}

export const EventList: FC<Props> = ({ events }) => {

  return (
    <Grid container spacing={4}>
        {
            events.map( event => (
                <EventCard 
                    key={ event.eventid }
                    event={ event }
                />
            ))
        }
    </Grid>
  )
}
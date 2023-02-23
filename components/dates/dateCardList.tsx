import { Grid } from "@mui/material";
import { FC } from "react"
import { DateCard } from "../dates/dateCard";
import { IDate } from '../../interfaces/dates/IDate';

interface Props {
    dates: IDate[]
}

export const DateCardList:FC<Props> = ({ dates }) => {
  return (
    <Grid container spacing={4}>
      {
        dates.map( (date ) => (
          <DateCard 
            date = { date }
            key = { date.dateid }
          />
        ))
      }

    </Grid>
  )
}
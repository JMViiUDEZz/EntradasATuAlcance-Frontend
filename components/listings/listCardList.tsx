import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../listings";
import { IList } from '../../interfaces';

interface Props {
    listings: IList[]
}

export const ListCardList:FC<Props> = ({ listings }) => {
  return (
    <Grid container spacing={4}>
      {
        listings.map( (list ) => (
          <CategoryCard 
            list = { list }
            key = { list.listid }
          />
        ))
      }

    </Grid>
  )
}
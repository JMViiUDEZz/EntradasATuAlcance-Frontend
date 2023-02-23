import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../listings/listCard";
import { IList } from '../../interfaces/listings/IList';

interface Props {
    lists: IList[]
}

export const CategoryCardList:FC<Props> = ({ lists }) => {
  return (
    <Grid container spacing={4}>
      {
        lists.map( (list ) => (
          <CategoryCard 
            list = { list }
            key = { list.listid }
          />
        ))
      }

    </Grid>
  )
}
import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../../components/categories/categoryCard";
import { ICategory } from '../../interfaces/categories/ICategory';

interface Props {
    categories: ICategory[]
}


export const CategoryCardList:FC<Props> = ({ categories }) => {
  return (
    <Grid container spacing={4}>
      {
        categories.map( (category ) => (
          <CategoryCard 
            category = { category }
            key = { category.catid }
          />
        ))
      }

    </Grid>
  )
}
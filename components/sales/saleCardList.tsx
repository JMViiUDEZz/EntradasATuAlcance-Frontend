import { Grid } from "@mui/material";
import { FC } from "react"
import { CategoryCard } from "../sales/saleCard";
import { ISale } from '../../interfaces/sales/ISale';

interface Props {
    sales: ISale[]
}

export const CategoryCardList:FC<Props> = ({ sales }) => {
  return (
    <Grid container spacing={4}>
      {
        sales.map( (sale ) => (
          <CategoryCard 
            sale = { sale }
            key = { sale.saleid }
          />
        ))
      }

    </Grid>
  )
}
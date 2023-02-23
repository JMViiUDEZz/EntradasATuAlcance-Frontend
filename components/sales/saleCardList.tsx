import { Grid } from "@mui/material";
import { FC } from "react"
import { SaleCard } from "../sales/saleCard";
import { ISale } from '../../interfaces/sales/ISale';

interface Props {
    sales: ISale[]
}

export const SaleCardList:FC<Props> = ({ sales }) => {
  return (
    <Grid container spacing={4}>
      {
        sales.map( (sale ) => (
          <SaleCard 
            sale = { sale }
            key = { sale.saleid }
          />
        ))
      }

    </Grid>
  )
}
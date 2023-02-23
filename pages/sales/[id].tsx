import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useSales } from '../../hooks/useSales';


interface Props {
    saleid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const saleid = router.query;
    console.log(saleid);
    // renombrando la variable sales por category
    const { sales:category, isLoading } = useSales (`/sales/${saleid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { saleid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
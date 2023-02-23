import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useDates } from '../../hooks/useDates';


interface Props {
    dateid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const dateid = router.query;
    console.log(dateid);
    // renombrando la variable dates por category
    const { dates:category, isLoading } = useDates (`/dates/${dateid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { dateid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
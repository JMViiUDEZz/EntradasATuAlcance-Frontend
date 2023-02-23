import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useVenues } from '../../hooks/useVenues';


interface Props {
    venueid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const venueid = router.query;
    console.log(venueid);
    // renombrando la variable venues por category
    const { venues:category, isLoading } = useVenues (`/venues/${venueid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { venueid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
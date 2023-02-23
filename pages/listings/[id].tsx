import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useListings } from '../../hooks/useListings';


interface Props {
    listid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const listid = router.query;
    console.log(listid);
    // renombrando la variable listings por category
    const { listings:category, isLoading } = useListings (`/listings/${listid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { listid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
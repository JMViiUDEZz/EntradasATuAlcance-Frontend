import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';


interface Props {
    catid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const catid = router.query;
    console.log(catid)
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { catid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
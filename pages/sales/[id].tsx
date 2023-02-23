import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useCategories } from '../../hooks/useCategories';


interface Props {
    catid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const catid = router.query;
    console.log(catid);
    // renombrando la variable categories por category
    const { categories:category, isLoading } = useCategories (`/categories/${catid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { catid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useSales } from '../../hooks/useSales';
import { SaleDetail } from '../../components/sales/saleDetail';


interface Props {
    saleid: string
}

const SalePage = () => {
    const router = useRouter();
    const saleid = router.query;
    console.log(saleid);
    // renombrando la variable sales por category
    const { sales:sale, isLoading } = useSales (`/sales/${saleid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { saleid.id} {`${router.query.id}`}</h2>
        <SaleDetail sale={sale} />
    </PublicLayouts>
    
  )
}

export default SalePage
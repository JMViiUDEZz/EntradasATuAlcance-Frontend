import { useRouter } from "next/router";
import { FC } from "react"

// import { PublicLayouts } from '../../components/layouts';
import { MainLayouts } from '../../components/layouts';
import { useSales } from '../../hooks';
import { SaleDetail } from '../../components/sales';
import { ISale } from "../../interfaces";


interface Props {
    saleid: string
}

const SalePage = () => {
    const router = useRouter();
    const saleid = router.query;
    console.log(saleid);
    // renombrando la variable sales por category
    // const { sales:sale, isLoading } = useSales (`/sales/${saleid.id}`);
    const { sales, isLoading } = useSales (`/sales/${saleid.id}`);
    const sale = sales[0] || {} as ISale;  
  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <h2>Detalle de la Categoria { saleid.id} {`${router.query.id}`}</h2>
        <SaleDetail sale={sale} />
    </MainLayouts>
    
  )
}

export default SalePage
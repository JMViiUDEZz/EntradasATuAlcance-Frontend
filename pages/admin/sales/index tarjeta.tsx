import { MainLayouts } from '../../../components/layouts';
import { SaleCardList } from '../../../components/sales';
import { useSales } from '../../../hooks';

const IndexCategoriesPage = () => {
  const { sales, isLoading } = useSales('/sales');
  console.log("l=", isLoading, "c=", sales);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <SaleCardList sales = {sales} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
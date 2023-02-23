import { PublicLayouts } from '../../layouts/PublicLayouts';
import { SaleCardList } from '../../components/sales/saleCardList';
import { useSales } from '../../hooks/useSales';

const IndexCategoriesPage = () => {
  const { sales, isLoading } = useSales('/sales');
  console.log("l=", isLoading, "c=", sales);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <SaleCardList sales = {sales} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
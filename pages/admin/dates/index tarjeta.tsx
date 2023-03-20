import { MainLayouts } from '../../../components/layouts';
import { DateCardList } from '../../../components/dates';
import { useDates } from '../../../hooks';

const IndexCategoriesPage = () => {
  const { dates, isLoading } = useDates('/dates');
  console.log("l=", isLoading, "c=", dates);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <DateCardList dates = {dates} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
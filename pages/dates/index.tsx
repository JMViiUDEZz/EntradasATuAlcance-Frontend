import { PublicLayouts } from '../../layouts/PublicLayouts';
import { DateCardList } from '../../components/dates/dateCardList';
import { useDates } from '../../hooks/useDates';

const IndexCategoriesPage = () => {
  const { dates, isLoading } = useDates('/dates');
  console.log("l=", isLoading, "c=", dates);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <DateCardList dates = {dates} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
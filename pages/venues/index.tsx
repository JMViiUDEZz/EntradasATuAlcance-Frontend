import { VenueCardList } from '../../components/venues';
import { useVenues } from '../../hooks';
import { MainLayouts } from '../../components/layouts';

const IndexCategoriesPage = () => {
  const { venues, isLoading } = useVenues('/venues');
  console.log("l=", isLoading, "c=", venues);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <VenueCardList venues = {venues} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
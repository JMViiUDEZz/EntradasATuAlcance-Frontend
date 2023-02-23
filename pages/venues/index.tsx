import { PublicLayouts } from '../../layouts/PublicLayouts';
import { VenueCardList } from '../../components/venues/venueCardList';
import { useVenues } from '../../hooks/useVenues';

const IndexCategoriesPage = () => {
  const { venues, isLoading } = useVenues('/venues');
  console.log("l=", isLoading, "c=", venues);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <VenueCardList venues = {venues} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
import { PublicLayouts } from '../../layouts/PublicLayouts';
import { ListCardList } from '../../components/listings/listCardList';
import { useListings } from '../../hooks/useListings';

const IndexCategoriesPage = () => {
  const { listings, isLoading } = useListings('/listings');
  console.log("l=", isLoading, "c=", listings);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <ListCardList listings = {listings} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
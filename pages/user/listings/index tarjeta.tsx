import { MainLayouts } from '../../../components/layouts';
import { ListCardList } from '../../../components/listings';
import { useListings } from '../../../hooks';

const IndexCategoriesPage = () => {
  const { listings, isLoading } = useListings('/listings');
  console.log("l=", isLoading, "c=", listings);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <ListCardList listings = {listings} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
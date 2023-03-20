import { MainLayouts } from '../../components/layouts';
import { EventCardList } from '../../components/events';
import { useEvents } from '../../hooks';

const IndexCategoriesPage = () => {
  const { events, isLoading } = useEvents('/events');
  console.log("l=", isLoading, "c=", events);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <EventCardList events = {events} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
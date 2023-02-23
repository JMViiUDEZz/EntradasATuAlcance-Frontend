import { PublicLayouts } from '../../layouts/PublicLayouts';
import { EventCardList } from '../../components/events/eventCardList';
import { useEvents } from '../../hooks/useEvents';

const IndexCategoriesPage = () => {
  const { events, isLoading } = useEvents('/events');
  console.log("l=", isLoading, "c=", events);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <EventCardList events = {events} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
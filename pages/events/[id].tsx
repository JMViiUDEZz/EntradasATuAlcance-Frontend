import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts } from "../../components/layouts";
import { useEvents } from '../../hooks';
import { EventDetail } from '../../components/events';
import { IEvent } from '../../interfaces';



interface Props {
    eventid: string
}

const EventPage = () => {
    const router = useRouter();
    console.log(router);

    const eventid = router.query;
    console.log(eventid);
    // renombrando la variable events por category
    // const { events:event, isLoading } = useEvents (`/events/${eventid.id}`);
    const { events, isLoading } = useEvents (`/events/${eventid.id}`);
    const event = events[0] || {} as IEvent;    
    console.log(event)
  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <h2>Detalle de la Categoria { eventid.id} {`${router.query.id}`}</h2>
        <EventDetail event={event} />
    </MainLayouts>
    
  )
}

export default EventPage
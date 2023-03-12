import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useEvents } from '../../hooks/useEvents';
import { EventDetail } from '../../components/events/eventDetail';
import { IEvent } from '../../interfaces/events/IEvent';



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
    <PublicLayouts>
        <h2>Detalle de la Categoria { eventid.id} {`${router.query.id}`}</h2>
        <EventDetail event={event} />
    </PublicLayouts>
    
  )
}

export default EventPage
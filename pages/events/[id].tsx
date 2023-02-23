import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useEvents } from '../../hooks/useEvents';


interface Props {
    eventid: string
}

const ProductoPage = () => {
    const router = useRouter();
    const eventid = router.query;
    console.log(eventid);
    // renombrando la variable events por category
    const { events:category, isLoading } = useEvents (`/events/${eventid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { eventid.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useVenues } from '../../hooks/useVenues';
import { VenueDetail } from '../../components/venues/venueDetail';

interface Props {
    venueid: string
}

const VenuePage = () => {
    const router = useRouter();
    const venueid = router.query;
    console.log(venueid);
    // renombrando la variable venues por category
    const { venues:venue, isLoading } = useVenues (`/venues/${venueid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { venueid.id} {`${router.query.id}`}</h2>
        <VenueDetail venue={venue} />
    </PublicLayouts>
    
  )
}

export default VenuePage
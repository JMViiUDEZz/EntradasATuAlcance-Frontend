import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useDates } from '../../hooks/useDates';
import { DateDetail } from "../../components/dates/dateDetail";


interface Props {
    dateid: string
}

const DatePage = () => {
    const router = useRouter(); 
    console.log(router);

    const dateid = router.query;
    console.log(dateid);
    // renombrando la variable dates por category
    const { dates:date, isLoading } = useDates (`/dates/${dateid.id}`);
  return (
    <PublicLayouts>
        <h2>Detalle de la Fecha { dateid.id} {`${router.query.id}`}</h2>
        <DateDetail date={date} />
    </PublicLayouts>
    
  )
}

export default DatePage
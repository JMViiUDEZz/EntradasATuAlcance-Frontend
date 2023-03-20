import { useRouter } from "next/router";
import { FC } from "react"

import { MainLayouts } from '../../../components/layouts';
import { useDates } from '../../../hooks';
import { DateDetail } from "../../../components/dates";
import { IDate } from '../../../interfaces';


interface Props {
    dateid: string
}

const DatePage = () => {
    const router = useRouter(); 
    console.log(router);

    const dateid = router.query;
    console.log(dateid);
    // renombrando la variable dates por category
    // const { dates:date, isLoading } = useDates (`/dates/${dateid.id}`);
    const { dates, isLoading } = useDates (`/dates/${dateid.id}`);
    const date = dates[0] || {} as IDate;
  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <h2>Detalle de la Fecha { dateid.id} {`${router.query.id}`}</h2>
        <DateDetail date={date} />
    </MainLayouts>
    
  )
}

export default DatePage
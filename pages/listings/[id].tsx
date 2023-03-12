import { useRouter } from "next/router";
import { FC } from "react"

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { useListings } from '../../hooks/useListings';
import { ListDetail } from '../../components/listings/listDetail';
import { IList } from '../../interfaces/listings/IList';

interface Props {
    listid: string
}

const ListPage = () => {
    const router = useRouter();
    const listid = router.query;
    console.log(listid);
    // renombrando la variable listings por category
    // const { listings:list, isLoading } = useListings (`/listings/${listid.id}`);
    const { listings, isLoading } = useListings (`/listings/${listid.id}`);
    const list = listings[0] || {} as IList;  
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { listid.id} {`${router.query.id}`}</h2>
        <ListDetail list={list} />
    </PublicLayouts>
    
  )
}

export default ListPage
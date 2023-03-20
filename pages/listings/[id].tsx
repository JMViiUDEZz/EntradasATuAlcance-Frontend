import { useRouter } from "next/router";
import { FC } from "react"

// import { PublicLayouts } from '../../components/layouts';
import { MainLayouts } from '../../components/layouts';
import { useListings } from '../../hooks';
import { ListDetail } from '../../components/listings';
import { IList } from '../../interfaces';

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
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <h2>Detalle de la Categoria { listid.id} {`${router.query.id}`}</h2>
        <ListDetail list={list} />
    </MainLayouts>
    
  )
}

export default ListPage
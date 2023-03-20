import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts } from "../../../components/layouts";
import { useCategories } from '../../../hooks';
import { CategoryDetail } from '../../../components/categories';
import { ICategory } from '../../../interfaces';

interface Props {
    catid: string
}

const CategoryPage = () => {
    const router = useRouter();
    console.log(router);

    const catid = router.query;
    console.log(catid);
    // renombrando la variable events por category
    // const { categories:category, isLoading } = useCategories (`/categories/${catid.id}`);
    const { categories, isLoading } = useCategories (`/categories/${catid.id}`);
    const category = categories[0] || {} as ICategory;
    console.log(category);
  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <h2>Detalle de la Categoria { catid.id} {`${router.query.id}`}</h2>
        <CategoryDetail category={category} />
    </MainLayouts>
    
  )
}

export default CategoryPage
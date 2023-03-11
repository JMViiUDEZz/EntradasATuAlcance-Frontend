import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useCategories } from '../../hooks/useCategories';
import { CategoryDetail } from '../../components/categories/categoryDetail';
import { ICategory } from '../../interfaces/categories/ICategory';

interface Props {
    catid: string
}

const CategoryPage = () => {
    const router = useRouter();
    console.log(router);

    const catid = router.query;
    console.log(catid);
    // renombrando la variable events por category
    const { categories:category, isLoading } = useCategories (`/categories/${catid.id}`);
    // const { categories, isLoading } = useCategories (`/categories/${catid.id}`);
    // const category = categories[0] || {} as ICategory;
    console.log(category);
  return (
    <PublicLayouts>
        <h2>Detalle de la Categoria { catid.id} {`${router.query.id}`}</h2>
        <CategoryDetail category={category} />
    </PublicLayouts>
    
  )
}

export default CategoryPage
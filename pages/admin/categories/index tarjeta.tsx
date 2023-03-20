import { MainLayouts } from '../../../components/layouts';
import { CategoryCardList } from '../../../components/categories';
import { useCategories } from '../../../hooks';

const IndexCategoriesPage = () => {
  const { categories, isLoading } = useCategories('/categories');
  console.log("l=", isLoading, "c=", categories);

  return (
    <MainLayouts title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <h2>Sección de Categorias</h2>
      <CategoryCardList categories = {categories} />
    </MainLayouts>
  )
}

export default IndexCategoriesPage;
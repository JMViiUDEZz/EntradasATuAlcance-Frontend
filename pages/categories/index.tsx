import { PublicLayouts } from '../../layouts/PublicLayouts';
import { CategoryCardList } from '../../components/categories/categoryCardList';
import { UseCategories } from '../../hooks/useCategories';

const IndexCategoriesPage = () => {
  const { categories, isLoading } = UseCategories('/categories');
  console.log("l=", isLoading, "c=", categories);

  return (
    <PublicLayouts>
      <h2>Sección de Categorias</h2>
      <CategoryCardList categories = {categories} />
    </PublicLayouts>
  )
}

export default IndexCategoriesPage;
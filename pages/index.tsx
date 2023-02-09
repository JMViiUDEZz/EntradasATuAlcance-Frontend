import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../layouts";
import { UseCategories } from '../hooks/useCategories';
import { CategoryList } from '../components/categories/categoryList';
import { Mundo } from '../components/Mundo';
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  // const { categories, isLoading } = UseCategories ('/categories');
  // const respuesta = useAuth ('/auth');
//  console.log(respuesta);
  // console.log(isLoading, "c=", categories);
  return (
    <MainLayouts>
      {/* {
        (isLoading )
          ? <CategoryList categories={ categories }  /> 
          : <Mundo />

      } */}
      <h1>Entradas a tu alcance</h1>
    </MainLayouts>
  )
}

export default indexPage
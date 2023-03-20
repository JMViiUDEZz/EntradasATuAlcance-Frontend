import axios from 'axios';
import { ICategory } from '../interfaces';

const actualizarRegistro = async (catid: string, data: ICategory) => {
  try {
    const response = await axios.patch(`http://194.61.28.54:80/api/categories/${catid}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default actualizarRegistro;

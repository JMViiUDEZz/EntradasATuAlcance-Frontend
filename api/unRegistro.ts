import axios from 'axios';

const unRegistro = async (catid: any) => {
  console.log(catid)
    try {
      const response = await axios.get(`http://194.61.28.54:80/api/categories/${catid}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  export default unRegistro

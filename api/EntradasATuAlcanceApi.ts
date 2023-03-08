import axios from 'axios';

const entradasATuAlcanceApi = axios.create({
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'http://194.61.28.54:82/api'

});
export default entradasATuAlcanceApi
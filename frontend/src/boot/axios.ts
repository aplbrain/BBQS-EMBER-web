import axios from 'axios';
import { boot } from 'quasar/wrappers';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({ baseURL: baseUrl });

export default boot(() => {});

export { api };

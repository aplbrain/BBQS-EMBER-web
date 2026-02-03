import { defineBoot } from '#q-app/wrappers';
import axios from 'axios';

const baseUrl = 'http://localhost:8000'; // TODO
const api = axios.create({ baseURL: baseUrl });

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };

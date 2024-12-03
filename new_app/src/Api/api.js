import axios from 'axios';

const api = axios.create({
  baseURL: 'https://greenvelvet.alwaysdata.net/pfc/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['token'] = token;
  }
  return config;
});

export default api;


export const fetchList = async () => {
  try {
    const response = await api.get('/list'); 
    return response.data; 
  } catch (error) {
    console.error("Erreur lors de la récupération de la liste :", error);
    throw error; 
  }
};








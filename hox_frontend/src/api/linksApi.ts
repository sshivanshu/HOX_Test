import axios from './axios';

export const getLinks = async (): Promise<{ id: string; title: string;}[]> => {
    const { data } = await axios.get('/links');
    return data;
  };
  
  export const createLink = async (link: { targetUrl: string }) => {
    const { data } = await axios.post('/links', link);
    return data;
  };
  
  export const getLinkById = async (id: string) => {
    const { data } = await axios.get(`/links/${id}`);
    return data;
  };

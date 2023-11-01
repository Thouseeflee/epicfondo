import axios from 'axios';

// const apiUrl = import.meta.env.VITE_API_BASE_URL
// const isDevelopment = import.meta.env.DEV;
// const apiUrl = isDevelopment ? import.meta.env.VITE_API_BASE_URL : '';
// const API_URL = `${apiUrl}/api/posts/posts`;
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/posts/posts`;
// const API_URL = `https://epicfondo-web.wm.r.appspot.com/api/posts/posts`;
export const getPosts = () => {
  return axios.get(API_URL);
};

export const createPost = (title, content, category) => {
  const data = { title, content, category };
  return axios.post(API_URL, data, { headers: { 'Content-Type': 'application/json' } });
};

export const getPostsByCategory = (selected) => {
  const url = `${API_URL}/?storyType=${selected}`;
  return axios.get(url);
};

export const getPostById = (id) => {
  const url = `${API_URL}/${id}`;
  return axios.get(url);
};

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

export const fetchPosts = () => API.get('/');
export const createPost = (payload) => API.post('/', payload);
export const updatePost = (payload) => API.post('/update', payload);
export const deletePost = (payload) => {
    API.delete(`/delete/${payload.id}`);
};
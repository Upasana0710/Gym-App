import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:3300'})

export const getAllUsers = ()=> API.get('/user');
export const signup = async (newUser) => await API.post('/user/signup',newUser);
export const signin = async (user) => await API.post('/user/signin/',user);
export const googlesignin = async (user) => await API.post('user/googlesignin',user);
export const googlesignup = async (user) => await API.post('user/googlesignup',user);
export const createGym = async (gym) => await API.post('/gym',gym);
export const getGyms = () => API.get('/gym');
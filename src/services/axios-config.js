import axios from 'axios';

// const baseURL="http://localhost:2006"; // baseURL is case sensitive-dont change it
const baseURL="https://g2c-project-3.onrender.com";

const publicAxios=axios.create({baseURL});

//-------------

const privateReq = axios.create({ baseURL,});

privateReq.interceptors.request.use((config) => 
{
  try{
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }}
  catch(err)
  {
    console.log(err);
    return;
  }
  return config;
});

export {publicAxios,privateReq};
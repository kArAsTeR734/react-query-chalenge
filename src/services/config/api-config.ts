import axios from "axios";

export const jsonPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers:{
    'Content-type':'application/json'
  }
})

export const jsonServerApi = axios.create({
  baseURL: 'http://localhost:5000',
  headers:{
    'Content-type':'application/json'
  }
})
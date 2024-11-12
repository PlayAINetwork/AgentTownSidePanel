import axios from "axios";
const BE_URL = import.meta.env.VITE_BE_URL;

export const axiosPrivate = axios.create({
  baseURL: BE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosPublic = axios.create({
  baseURL: BE_URL,
  headers: { "Content-Type": "application/json" },
});

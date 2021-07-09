import axios from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DESAFIO_BACKEND_API_URL
});

export default http;
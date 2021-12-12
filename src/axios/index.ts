import axios from "axios";

const API_BASE_URL = (`${import.meta.env.VITE_API_BASE_URL}/api/`)

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

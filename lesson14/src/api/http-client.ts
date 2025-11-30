import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:3005/jokes',
    timeout: 5000
});

import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost/wptest/wp-json/wp/v2/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'HEADER'}
});

export default client;
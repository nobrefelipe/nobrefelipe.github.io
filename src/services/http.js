import axios from 'axios';

const client = axios.create({
    baseURL: 'https://book-app-1d0bf.firebaseio.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'HEADER'}
});

export default client;

/*
 NOT BEING USED FOR NOW
 */
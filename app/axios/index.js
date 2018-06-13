import axios from 'axios';

export default () =>
  axios.create({
    baseURL: 'https://sunlive.pro:1337',
    // baseURL: 'https://77.222.139.39:1337',
    // baseURL: 'http://localhost:8081',
  });

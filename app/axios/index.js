import axios from 'axios';

export default () =>
  axios.create({
    baseURL: 'https://sunlive.pro:8081',
    // baseURL: 'https://77.222.139.39:1337',
    // baseURL: 'http://localhost:8081',
  });

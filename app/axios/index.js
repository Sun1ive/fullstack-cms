import axios from 'axios';

export default () =>
  axios.create({
    // baseURL: 'http://localhost:8081',
    baseURL: 'http://api:8081',
  });

import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'http://api.asetly.com/api',
});

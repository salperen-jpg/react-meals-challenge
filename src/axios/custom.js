import axios from 'axios';
import { API_ENDPOINT } from '../utils';

const custom = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Accept: 'application/json',
  },
});

export default custom;

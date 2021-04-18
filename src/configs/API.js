import axios from 'axios';

export const configJSON = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API = axios.create({
  baseURL: 'http://192.168.1.8:5001/api/v2',
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

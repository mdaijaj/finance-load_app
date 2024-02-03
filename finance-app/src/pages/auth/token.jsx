import axios from 'axios';

const instance = axios.create({
  baseURL: 'your_api_base_url',
});

// Function to set the token in the request headers
const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

export { instance as api, setAuthToken };

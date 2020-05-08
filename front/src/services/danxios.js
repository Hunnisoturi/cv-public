import axios from 'axios';

const backendUrl = 'http://localhost:3002';

export default axios.create({
  baseURL: backendUrl,
});

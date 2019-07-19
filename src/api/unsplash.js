import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 98b46b4ce14d5459a0b503c98f8a27ff7e8a6c98de5e9fb072a1927ee477da8d',
  }
});

// src/network/baseService.js
import api from './api';

class BaseService {
  // GET Request
  async get(endpoint, params = {}) {
    try {
      const response = await api.get(endpoint, { params ,
        headers: {
            'Content-Type': 'application/json', // Default Content-Type
           
          },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  // POST Request
  async post(endpoint, data = {}) {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  // PUT Request
  async put(endpoint, data = {}) {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  // DELETE Request
  async delete(endpoint) {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}

export default new BaseService();

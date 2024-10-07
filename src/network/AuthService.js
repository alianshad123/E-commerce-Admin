// src/network/authService.js
import BaseService from './baseService';

class AuthService {
  async login(username, password) {
    try {
      const response = await BaseService.get('/api/admins', {
        username,
        password,
      });

     return response;
        
     
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }


  async addProducts(products) {
    try {
      const response = await BaseService.post('/api/products/addProduct', 
       products
      );

     return response;
        
     
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }



}

export default new AuthService();

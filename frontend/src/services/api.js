import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const partnerService = {
  getAllPartners: async () => {
    try {
      const response = await api.get('/partners');
      return response.data;
    } catch (error) {
      console.error('Error fetching partners:', error);
      throw error;
    }
  },
  
  getPartnerById: async (id) => {
    try {
      const response = await api.get(`/partners/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching partner ${id}:`, error);
      throw error;
    }
  },
  
  createPartner: async (partnerData) => {
    try {
      const response = await api.post('/partners', partnerData);
      return response.data;
    } catch (error) {
      console.error('Error creating partner:', error);
      throw error;
    }
  },
  
  updatePartner: async (id, partnerData) => {
    try {
      const response = await api.put(`/partners/${id}`, partnerData);
      return response.data;
    } catch (error) {
      console.error(`Error updating partner ${id}:`, error);
      throw error;
    }
  },
  
  deletePartner: async (id) => {
    try {
      const response = await api.delete(`/partners/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting partner ${id}:`, error);
      throw error;
    }
  }
};

export default api;
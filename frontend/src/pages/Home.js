import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import PartnerTable from '../components/PartnerTable';

const Home = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await axios.get('/api/partners');
      setPartners(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch partners');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/partners/${id}`);
      setPartners(partners.filter(partner => partner._id !== id));
    } catch (err) {
      setError('Failed to delete partner');
    }
  };

  return (
    <div>
      <Dashboard />
      
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>All Partners</h2>
          <Link to="/add-partner" className="btn btn-primary">
            Add New Partner
          </Link>
        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <PartnerTable 
          partners={partners} 
          onDelete={handleDelete}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Home;

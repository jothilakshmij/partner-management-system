import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PartnerForm from '../components/PartnerForm';

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchPartner();
  }, [id]);

  const fetchPartner = async () => {
    try {
      const response = await axios.get(`/api/partners/${id}`);
      setPartner(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch partner details');
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setSuccess('Partner updated successfully!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading partner details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger">
          {error}
        </div>
        <button onClick={() => navigate('/')} className="btn btn-secondary">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}
      
      <PartnerForm
        partner={partner}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isEditing={true}
      />
    </div>
  );
};

export default EditPartner;

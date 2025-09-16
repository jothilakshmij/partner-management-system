import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PartnerForm from '../components/PartnerForm';

const AddPartner = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    setSuccess('Partner added successfully!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container">
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}
      
      <PartnerForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isEditing={false}
      />
    </div>
  );
};

export default AddPartner;

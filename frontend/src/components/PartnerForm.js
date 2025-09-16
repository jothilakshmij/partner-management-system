import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartnerForm = ({ partner, onSubmit, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    type: 'Distributor',
    status: 'Active'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (partner && isEditing) {
      setFormData(partner);
    }
  }, [partner, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEditing) {
        await axios.put(`/api/partners/${partner._id}`, formData);
      } else {
        await axios.post('/api/partners', formData);
      }
      onSubmit();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="mb-4">
        {isEditing ? 'Edit Partner' : 'Add New Partner'}
      </h2>
      
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Partner Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            className="form-control"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="region" className="form-label">Region *</label>
          <input
            type="text"
            id="region"
            name="region"
            className="form-control"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type" className="form-label">Partner Type *</label>
          <select
            id="type"
            name="type"
            className="form-control"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="Distributor">Distributor</option>
            <option value="Vendor">Vendor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status" className="form-label">Status *</label>
          <select
            id="status"
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Saving...' : (isEditing ? 'Update Partner' : 'Add Partner')}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;

import React, { useState, useEffect } from 'react';
import { partnerService } from '../services/api';
import { Link } from 'react-router-dom';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await partnerService.getAllPartners();
        setPartners(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch partners:', err);
        setError('Failed to load partners. Please try again later.');
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="panel table-panel">
      <div className="panel-title">Partners</div>
      <div className="panel-actions">
        <Link to="/add-partner" className="button primary">Add Partner</Link>
      </div>
      <div className="table-responsive">
        {loading ? (
          <p>Loading partners...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table className="dark-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Joined</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {partners.length > 0 ? (
                partners.map((partner) => (
                  <tr key={partner._id}>
                    <td>{partner.name}</td>
                    <td>{partner.category}</td>
                    <td><span className={`pill ${partner.status === 'Active' ? 'green' : 'gray'}`}>{partner.status}</span></td>
                    <td>{new Date(partner.createdAt).toLocaleDateString()}</td>
                    <td className="row-actions">
                      <Link to={`/edit-partner/${partner._id}`} className="ghost">Edit</Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="muted">No partners found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Partners;



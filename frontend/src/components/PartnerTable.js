import React from 'react';
import { Link } from 'react-router-dom';

const PartnerTable = ({ partners, onDelete, loading }) => {
  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      await onDelete(id);
    }
  };

  if (loading) {
    return <div className="loading">Loading partners...</div>;
  }

  if (!partners || partners.length === 0) {
    return (
      <div className="card text-center">
        <h3>No partners found</h3>
        <p>Start by adding your first partner!</p>
        <Link to="/add-partner" className="btn btn-primary">
          Add Partner
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="mb-3">Partners List</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Region</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr key={partner._id}>
                <td>{partner.name}</td>
                <td>{partner.company}</td>
                <td>
                  <a href={`mailto:${partner.email}`} style={{ color: '#007bff' }}>
                    {partner.email}
                  </a>
                </td>
                <td>
                  <a href={`tel:${partner.phone}`} style={{ color: '#007bff' }}>
                    {partner.phone}
                  </a>
                </td>
                <td>{partner.region}</td>
                <td>
                  <span 
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: partner.type === 'Distributor' ? '#e3f2fd' : '#fff3e0',
                      color: partner.type === 'Distributor' ? '#1976d2' : '#f57c00'
                    }}
                  >
                    {partner.type}
                  </span>
                </td>
                <td>
                  <span 
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: partner.status === 'Active' ? '#e8f5e8' : '#ffebee',
                      color: partner.status === 'Active' ? '#2e7d32' : '#c62828'
                    }}
                  >
                    {partner.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <Link
                      to={`/edit-partner/${partner._id}`}
                      className="btn btn-secondary"
                      style={{ 
                        padding: '4px 8px', 
                        fontSize: '12px',
                        textDecoration: 'none'
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(partner._id, partner.name)}
                      className="btn btn-danger"
                      style={{ 
                        padding: '4px 8px', 
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerTable;

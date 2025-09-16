import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#343a40',
      padding: '1rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            Partner Management System
          </Link>
          <div className="d-flex gap-2">
            <Link 
              to="/" 
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              Dashboard
            </Link>
            <Link 
              to="/add-partner" 
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Add Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

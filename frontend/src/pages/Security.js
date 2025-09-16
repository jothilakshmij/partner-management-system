import React from 'react';

const Security = () => {
  return (
    <div className="panel status-panel">
      <div className="panel-title">Security</div>
      <div className="status-grid">
        <div className="status-card">
          <div className="status-label">Guard Bots</div>
          <div className="status-value">124/124</div>
          <div className="status-meta online">Online</div>
        </div>
        <div className="status-card">
          <div className="status-label">Firewall</div>
          <div className="status-value">99.9%</div>
          <div className="status-meta">Blocked</div>
        </div>
        <div className="status-card">
          <div className="status-label">Alerts</div>
          <div className="status-value">0</div>
          <div className="status-meta">Last 24h</div>
        </div>
      </div>
    </div>
  );
};

export default Security;



import React from 'react';

const Devices = () => {
  const items = Array.from({ length: 6 });
  return (
    <div className="panel">
      <div className="panel-title">Devices</div>
      <div className="devices-grid">
        {items.map((_, i) => (
          <div key={i} className="device-card">
            <div className="device-name">Device #{i + 1}</div>
            <div className="device-status">
              <span className="pill green">Online</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;



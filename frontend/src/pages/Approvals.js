import React from 'react';

const Approvals = () => {
  return (
    <div className="panel">
      <div className="panel-title">Pending Approvals</div>
      <div className="approvals-list">
        <div className="approval-card">
          <div className="approval-title">Partner ABC</div>
          <div className="approval-meta">Requested: —</div>
          <div className="approval-actions">
            <button className="ghost">Approve</button>
            <button className="ghost">Reject</button>
          </div>
        </div>
        <div className="approval-card muted">Replace with API-mapped approvals</div>
      </div>
    </div>
  );
};

export default Approvals;



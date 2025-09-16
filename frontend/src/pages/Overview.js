import React from 'react';

const Overview = () => {
  return (
    <>
      <section className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-title">Total Partners</div>
          <div className="kpi-value">—</div>
          <div className="kpi-meta up">Weekly scope</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">Minutes Lost</div>
          <div className="kpi-value">—</div>
          <div className="kpi-meta down">Meetings and rabbit holes</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-title">Pending Approvals</div>
          <div className="kpi-value">—</div>
          <div className="kpi-meta">Awaiting review</div>
        </div>
      </section>

      <section className="grid-2">
        <div className="panel chart-panel">
          <div className="panel-header">
            <div className="legend">
              <span className="dot blue" /> Spendings
              <span className="dot green" /> Active
              <span className="dot amber" /> Inactive
            </div>
            <div className="switches">
              <button className="switch active">Week</button>
              <button className="switch">Month</button>
              <button className="switch">Year</button>
            </div>
          </div>
          <div className="chart-placeholder">Chart placeholder</div>
        </div>

        <div className="panel notifications">
          <div className="panel-title">Notifications</div>
          <ul className="notice-list">
            <li>
              <span className="badge tiny">NEW</span>
              Payment received — processed successfully
            </li>
            <li>
              Intro: JOYCO Studio and VB — accessibility and innovation
            </li>
            <li>
              System update — security patches applied
            </li>
          </ul>
        </div>
      </section>

      <section className="grid-2">
        <div className="panel table-panel">
          <div className="panel-title">Recent Partners</div>
          <div className="table-responsive">
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
                <tr>
                  <td>—</td>
                  <td>—</td>
                  <td><span className="pill green">Active</span></td>
                  <td>—</td>
                  <td className="row-actions">
                    <button className="ghost">View</button>
                    <button className="ghost">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="muted">Replace with API-mapped rows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel status-panel">
          <div className="panel-title">Security Status</div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;



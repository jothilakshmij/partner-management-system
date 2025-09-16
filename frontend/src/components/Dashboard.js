import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="monky-dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">⚙️</div>
          <div className="brand-text">
            <div className="brand-title">M.O.N.K.Y.</div>
            <div className="brand-sub">Partner OS</div>
          </div>
        </div>
        <nav className="nav">
          <NavLink end to="/" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Overview</NavLink>
          <NavLink to="/partners" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Partners</NavLink>
          <NavLink to="/approvals" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Approvals</NavLink>
          <NavLink to="/devices" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Devices</NavLink>
          <NavLink to="/security" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Security</NavLink>
          <NavLink to="/communication" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>Communication</NavLink>
        </nav>
        <div className="nav-footer">Admin Settings</div>
      </aside>

      <main className="main">
        <header className="topbar">
          <PageTitle />
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            <Link to="/admin" className="ghost">Admin</Link>
            <ThemeToggle />
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('pms_theme') || 'dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pms_theme', theme);
  }, [theme]);
  const isDark = theme === 'dark';
  return (
    <button className="theme-toggle" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

const PageTitle = () => {
  const location = useLocation();
  const map = useMemo(() => ({
    '/': 'Overview',
    '/partners': 'Partners',
    '/approvals': 'Approvals',
    '/devices': 'Devices',
    '/security': 'Security',
    '/communication': 'Communication'
  }), []);
  const title = map[location.pathname] || 'Overview';
  return (
    <div className="page-title"><span className="chip">01</span> {title}</div>
  );
};

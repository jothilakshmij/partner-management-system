import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const emptyForm = { name: '', category: '', status: 'Active', email: '', phone: '', notes: '' };

const Admin = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/partners');
      setPartners(data.data || []);
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPartners(); }, []);

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setShowModal(true); };
  const openEdit = (p) => { setForm({ name: p.name, category: p.category, status: p.status, email: p.email || '', phone: p.phone || '', notes: p.notes || '' }); setEditingId(p._id); setShowModal(true); };

  const savePartner = async () => {
    try {
      setError(''); setSuccess('');
      if (editingId) {
        await axios.put(`/api/partners/${editingId}`, form);
        setSuccess('Partner updated');
      } else {
        await axios.post('/api/partners', form);
        setSuccess('Partner added');
      }
      setShowModal(false);
      await fetchPartners();
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    }
  };

  const deletePartner = async (id) => {
    if (!window.confirm('Delete this partner?')) return;
    try {
      await axios.delete(`/api/partners/${id}`);
      setSuccess('Partner deleted');
      setPartners((prev) => prev.filter((p) => p._id !== id));
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button onClick={openAdd} className="px-3 py-2 border rounded">Add Partner</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="panel table-panel">
        <div className="panel-title">Partners</div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="table-responsive">
            <table className="dark-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {partners.map((p) => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.category}</td>
                    <td>{p.status}</td>
                    <td>{p.joined ? new Date(p.joined).toLocaleDateString() : '-'}</td>
                    <td>{p.email || '-'}</td>
                    <td>{p.phone || '-'}</td>
                    <td className="row-actions">
                      <button className="ghost" onClick={() => openEdit(p)}>Edit</button>
                      <button className="ghost" onClick={() => deletePartner(p._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
                {partners.length === 0 && (
                  <tr><td colSpan="7" className="muted">No partners yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 grid place-items-center" style={{ background: 'rgba(0,0,0,.5)' }}>
          <div className="panel" style={{ width: 520 }}>
            <div className="panel-title">{editingId ? 'Edit Partner' : 'Add Partner'}</div>
            <div style={{ padding: 12, display: 'grid', gap: 10 }}>
              <div className="form-group"><label className="form-label">Name</label><input className="form-control" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Category</label><input className="form-control" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Status</label>
                <select className="form-control" value={form.status} onChange={e=>setForm({...form, status:e.target.value})}>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Email</label><input className="form-control" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Notes</label><textarea className="form-control" rows="3" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
              </div>
              <div style={{ display:'flex', gap: 8, justifyContent:'flex-end' }}>
                <button className="ghost" onClick={()=>setShowModal(false)}>Cancel</button>
                <button className="ghost" onClick={savePartner}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;



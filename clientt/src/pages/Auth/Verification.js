// Verification.js
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const Verification = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/verify-email', {
        email,
        code: verificationCode,
      });
      if (res && res.data.message === 'Email verified successfully') {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title="Verify Email">
      <div className="form-container" style={{ minHeight: '90vh' }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">VERIFY EMAIL</h4>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="form-control"
              id="exampleInputCode"
              placeholder="Enter Verification Code"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            VERIFY
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Verification;

import React, { useState } from 'react';
import { useApp } from '../../store';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-purple-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-8">Login to continue learning.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-purple-500 text-white font-bold py-3 rounded-xl hover:bg-purple-600 transition-transform active:scale-95 shadow-lg shadow-purple-200">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          Don't have an account? <Link to="/auth/register" className="text-purple-600 font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
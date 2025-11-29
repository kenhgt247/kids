import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Search, User as UserIcon, LogOut } from 'lucide-react';
import { useApp } from '../store';

const Header = () => {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pastel-secondary h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80 transition-opacity">
          Asking Kids
        </Link>

        {/* Search Bar - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 border border-transparent focus-within:border-pastel-accent transition-all">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input 
            type="text"
            placeholder="Search questions, blogs..."
            className="bg-transparent border-none focus:outline-none w-full text-sm text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-pastel-bg rounded-full transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-400 rounded-full border border-white"></span>
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="flex items-center gap-2 hover:bg-pastel-bg p-1 pr-3 rounded-full transition-all">
                <img 
                  src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.name}`} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full border-2 border-pastel-primary"
                />
                <span className="font-semibold text-sm text-gray-700 hidden sm:block">{user.name}</span>
              </Link>
              <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-400 transition-colors" title="Logout">
                 <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
             <div className="flex items-center gap-2">
                <Link to="/auth/login" className="text-sm font-bold text-gray-600 hover:text-purple-600 px-3 py-1">
                  Login
                </Link>
                <Link to="/auth/register" className="text-sm font-bold bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 shadow-md transition-transform transform hover:-translate-y-0.5">
                  Sign Up
                </Link>
             </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
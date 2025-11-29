import React from 'react';
import { useApp } from '../store';
import { Navigate } from 'react-router-dom';
import { Camera, Star, Award } from 'lucide-react';

const Profile = () => {
  const { user } = useApp();

  if (!user) return <Navigate to="/auth/login" />;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
      <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-400"></div>
      <div className="px-8 pb-8">
        <div className="relative -mt-12 mb-6 flex justify-between items-end">
          <div className="relative">
             <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white" />
             <button className="absolute bottom-0 right-0 bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 text-gray-600">
               <Camera className="w-4 h-4" />
             </button>
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-bold">
            <Star className="w-5 h-5 fill-current" />
            {user.points} Points
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-800">{user.name}</h1>
        <p className="text-gray-500 mb-6">{user.email}</p>

        <div className="border-t border-gray-100 pt-6">
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
             <div className="p-4 bg-gray-50 rounded-xl opacity-50">
               <div className="text-2xl mb-1">🥇</div>
               <div className="text-xs font-bold text-gray-500">First Post</div>
             </div>
             <div className="p-4 bg-gray-50 rounded-xl opacity-50">
               <div className="text-2xl mb-1">🤓</div>
               <div className="text-xs font-bold text-gray-500">Bookworm</div>
             </div>
             <div className="p-4 bg-gray-50 rounded-xl opacity-50">
               <div className="text-2xl mb-1">🚀</div>
               <div className="text-xs font-bold text-gray-500">Fast Learner</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
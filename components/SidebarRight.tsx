import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarRight = () => {
  const topMembers = [
    { id: 1, name: "Bunny Learner", points: 1500, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bunny" },
    { id: 2, name: "Smart Fox", points: 1240, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fox" },
    { id: 3, name: "Happy Bear", points: 980, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bear" },
  ];

  return (
    <div className="hidden xl:block w-72 sticky top-20 h-[calc(100vh-5rem)] space-y-6">
      
      {/* Top Members */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-purple-50">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h3 className="font-bold text-gray-700">Top Students</h3>
        </div>
        <div className="space-y-4">
          {topMembers.map((member, idx) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full bg-gray-100" />
                  {idx === 0 && <span className="absolute -top-1 -right-1 text-xs">👑</span>}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.points} pts</p>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-400">#{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Topic */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-5 shadow-md text-white">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 fill-white" />
          <h3 className="font-bold">Topic of the Week</h3>
        </div>
        <p className="text-sm font-medium mb-3 opacity-90">Space Exploration 🚀</p>
        <p className="text-xs opacity-80 mb-4">Join the discussion about Mars missions and new satellites!</p>
        <Link to="/hoi-dap" className="block text-center bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 rounded-lg transition-colors">
          Join Discussion
        </Link>
      </div>

    </div>
  );
};

export default SidebarRight;
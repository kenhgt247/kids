import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, BookOpen, MessageCircleQuestion, Library } from 'lucide-react';

const SidebarLeft = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Kids Zone', icon: Gamepad2, path: '/kids' },
    { label: 'Blog', icon: BookOpen, path: '/blog' },
    { label: 'Q&A', icon: MessageCircleQuestion, path: '/hoi-dap' },
    { label: 'Library', icon: Library, path: '/library' },
  ];

  return (
    <div className="hidden lg:block w-64 sticky top-20 h-[calc(100vh-5rem)]">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-white shadow-sm text-purple-600 translate-x-1' 
                  : 'text-gray-600 hover:bg-white/50 hover:text-purple-500'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Decorative Card */}
      <div className="mt-8 p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl mx-2 shadow-inner">
         <h4 className="font-bold text-purple-800 text-sm mb-1">Daily Challenge!</h4>
         <p className="text-xs text-purple-600 mb-2">Complete a math quiz to earn +50 points.</p>
         <button className="w-full bg-white text-purple-600 text-xs font-bold py-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            Start Now
         </button>
      </div>
    </div>
  );
};

export default SidebarLeft;
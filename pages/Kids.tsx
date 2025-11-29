import React from 'react';
import { Gamepad2, PenTool, Rocket } from 'lucide-react';

const Kids = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-purple-600 mb-2">Kids Zone 🎮</h1>
        <p className="text-gray-500">Play, Learn, and Grow!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-orange-100 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
             <Gamepad2 className="text-orange-500" />
          </div>
          <h3 className="font-bold text-orange-700">Games</h3>
          <p className="text-xs text-orange-600/80 mt-1">Math puzzles & Logic</p>
        </div>

        <div className="bg-green-100 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
             <PenTool className="text-green-500" />
          </div>
          <h3 className="font-bold text-green-700">Worksheets</h3>
          <p className="text-xs text-green-600/80 mt-1">Printable activities</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
             <Rocket className="text-blue-500" />
          </div>
          <h3 className="font-bold text-blue-700">Learning Path</h3>
          <p className="text-xs text-blue-600/80 mt-1">Structured lessons</p>
        </div>
      </div>

      {/* Game List Placeholder */}
      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Popular Games</h2>
      <div className="grid grid-cols-2 gap-4">
         {[1, 2, 3, 4].map(i => (
           <div key={i} className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden group cursor-pointer">
             <img src={`https://picsum.photos/400/250?random=${i+10}`} className="w-full h-full object-cover" alt="Game" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-white font-bold bg-purple-500 px-4 py-2 rounded-full">Play Now</span>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default Kids;
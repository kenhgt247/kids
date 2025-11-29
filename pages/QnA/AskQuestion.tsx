import React, { useState } from 'react';
import { useApp } from '../../store';
import { useNavigate } from 'react-router-dom';

const AskQuestion = () => {
  const { addQuestion, user } = useApp();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!user) {
    navigate('/auth/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addQuestion(title, content);
      navigate('/hoi-dap');
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ask a Question</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
          <input 
            type="text" 
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
            placeholder="e.g. How do volcanoes erupt?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Details</label>
          <textarea 
            className="w-full border border-gray-200 rounded-xl p-3 h-40 focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
            placeholder="Describe your question in more detail..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end gap-3">
           <button type="button" onClick={() => navigate('/hoi-dap')} className="px-5 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100">Cancel</button>
           <button type="submit" className="bg-purple-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-purple-600 shadow-md">Post Question</button>
        </div>
      </form>
    </div>
  );
};

export default AskQuestion;
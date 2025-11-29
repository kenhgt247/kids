import React, { useState } from 'react';
import { useApp } from '../store';
import DocumentCard from '../components/DocumentCard';
import { Plus } from 'lucide-react';

const Library = () => {
  const { documents, addDocument, user } = useApp();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(title && desc) {
      addDocument({
        title,
        description: desc,
        fileUrl: '#',
        type: 'PDF'
      });
      setIsFormOpen(false);
      setTitle('');
      setDesc('');
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Resource Library 📖</h1>
          <p className="text-gray-500 text-sm">Download worksheets and slides.</p>
        </div>
        {user && (
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="flex items-center gap-2 bg-purple-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-purple-600 transition-colors"
          >
            <Plus className="w-5 h-5" /> Share Doc
          </button>
        )}
      </div>

      {isFormOpen && (
        <div className="bg-purple-50 p-4 rounded-2xl mb-6 animate-fade-in">
          <h3 className="font-bold text-gray-700 mb-3">Share a new resource</h3>
          <form onSubmit={handleAdd} className="space-y-3">
             <input className="w-full p-2 rounded-lg border border-purple-200" placeholder="Document Title" value={title} onChange={e => setTitle(e.target.value)} />
             <input className="w-full p-2 rounded-lg border border-purple-200" placeholder="Short description" value={desc} onChange={e => setDesc(e.target.value)} />
             <button type="submit" className="bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg">Upload (Mock)</button>
          </form>
        </div>
      )}

      <div className="grid gap-4">
        {documents.map(doc => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
};

export default Library;
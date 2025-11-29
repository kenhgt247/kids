import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Document } from '../types';

interface Props {
  document: Document;
}

const DocumentCard: React.FC<Props> = ({ document }) => {
  const getIconColor = (type: string) => {
    switch(type) {
      case 'PDF': return 'text-red-500 bg-red-50';
      case 'DOCX': return 'text-blue-500 bg-blue-50';
      case 'PPT': return 'text-orange-500 bg-orange-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-50 hover:border-purple-200 transition-all flex items-start gap-4">
      <div className={`p-3 rounded-lg ${getIconColor(document.type)}`}>
        <FileText className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-800 mb-1">{document.title}</h4>
        <p className="text-xs text-gray-500 mb-2">{document.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">By {document.authorName} • {document.createdAt}</span>
          <a 
            href={document.fileUrl} 
            className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full transition-colors"
          >
            <Download className="w-3 h-3" /> Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
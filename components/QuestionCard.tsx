import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import { Question } from '../types';

interface Props {
  question: Question;
}

const QuestionCard: React.FC<Props> = ({ question }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-purple-50 hover:shadow-md transition-shadow mb-4">
      <Link to={`/hoi-dap/${question.id}`}>
        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-purple-600 transition-colors">
          {question.title}
        </h3>
      </Link>
      <p className="text-gray-500 text-sm line-clamp-2 mb-4">
        {question.content}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
             <ThumbsUp className="w-4 h-4" /> {question.votes}
          </span>
          <span className="flex items-center gap-1">
             <MessageSquare className="w-4 h-4" /> {question.answersCount} answers
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>by <span className="text-purple-500 font-medium">{question.authorName}</span></span>
          <span>•</span>
          <span>{question.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
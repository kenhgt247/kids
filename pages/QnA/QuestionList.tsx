import React from 'react';
import { useApp } from '../../store';
import QuestionCard from '../../components/QuestionCard';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const QuestionList = () => {
  const { questions, user } = useApp();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Community Q&A</h1>
          <p className="text-gray-500 text-sm">Ask questions, get answers from teachers and friends.</p>
        </div>
        {user ? (
          <Link 
            to="/hoi-dap/ask" 
            className="flex items-center gap-2 bg-purple-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-purple-600 transition-colors shadow-md"
          >
            <PlusCircle className="w-5 h-5" />
            Ask Question
          </Link>
        ) : (
          <Link to="/auth/login" className="text-sm text-purple-600 font-bold underline">Login to ask</Link>
        )}
      </div>

      <div className="space-y-4">
        {questions.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No questions yet. Be the first!</p>
        ) : (
          questions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))
        )}
      </div>
    </div>
  );
};

export default QuestionList;
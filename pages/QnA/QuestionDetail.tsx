import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../../store';
import { ArrowLeft, User, Send } from 'lucide-react';
import { Answer } from '../../types';

const QuestionDetail = () => {
  const { id } = useParams();
  const { questions, user } = useApp();
  const [newAnswer, setNewAnswer] = useState('');
  
  // Mock finding question
  const question = questions.find(q => q.id === Number(id));

  // Mock answers (local state for demo)
  const [answers, setAnswers] = useState<Answer[]>([
     { id: 101, questionId: Number(id), content: "You should check out Khan Academy videos!", authorId: 2, authorName: "Mr. Owl", createdAt: "2023-10-21", votes: 3 }
  ]);

  const handlePostAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newAnswer.trim() || !user) return;
    
    const ans: Answer = {
      id: Date.now(),
      questionId: Number(id),
      content: newAnswer,
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date().toISOString().split('T')[0],
      votes: 0
    };
    setAnswers([...answers, ans]);
    setNewAnswer('');
  };

  if (!question) return <div className="text-center py-10">Question not found</div>;

  return (
    <div>
       <Link to="/hoi-dap" className="inline-flex items-center text-sm text-gray-500 hover:text-purple-600 mb-4">
         <ArrowLeft className="w-4 h-4 mr-1" /> Back to Q&A
       </Link>

       <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-50 mb-6">
         <h1 className="text-2xl font-bold text-gray-800 mb-3">{question.title}</h1>
         <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
           <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-md font-bold">{question.authorName}</span>
           <span>• {question.createdAt}</span>
         </div>
         <p className="text-gray-700 leading-relaxed">{question.content}</p>
       </div>

       <h3 className="font-bold text-gray-700 mb-4">{answers.length} Answers</h3>

       <div className="space-y-4 mb-8">
         {answers.map(ans => (
           <div key={ans.id} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-3">
             <div className="flex-shrink-0">
               <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                 <User className="w-4 h-4 text-gray-500" />
               </div>
             </div>
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <span className="font-bold text-sm text-gray-800">{ans.authorName}</span>
                 <span className="text-xs text-gray-400">{ans.createdAt}</span>
               </div>
               <p className="text-gray-600 text-sm">{ans.content}</p>
             </div>
           </div>
         ))}
       </div>

       {user ? (
         <div className="bg-white p-4 rounded-2xl shadow-sm">
           <form onSubmit={handlePostAnswer} className="relative">
             <textarea 
               className="w-full bg-gray-50 rounded-xl p-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
               placeholder="Write your answer..."
               rows={3}
               value={newAnswer}
               onChange={(e) => setNewAnswer(e.target.value)}
             />
             <button type="submit" className="absolute bottom-3 right-3 text-purple-500 hover:bg-purple-100 p-2 rounded-full transition-colors">
               <Send className="w-5 h-5" />
             </button>
           </form>
         </div>
       ) : (
         <div className="text-center p-4 bg-purple-50 rounded-xl text-purple-800 text-sm">
           Please <Link to="/auth/login" className="font-bold underline">Login</Link> to answer.
         </div>
       )}
    </div>
  );
};

export default QuestionDetail;
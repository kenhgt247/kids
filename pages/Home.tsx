import React from 'react';
import { useApp } from '../store';
import QuestionCard from '../components/QuestionCard';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, questions, posts } = useApp();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Hello, {user ? user.name : 'Little Explorer'}! 👋
          </h1>
          <p className="text-gray-500 max-w-md">
            Ready to learn something new today? Ask questions, read stories, or play games!
          </p>
          {!user && (
             <div className="mt-4">
               <Link to="/auth/register" className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-600 transition-colors shadow-lg shadow-purple-200">
                 Join Free
               </Link>
             </div>
          )}
        </div>
        {/* Decorative Circle */}
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-yellow-100 rounded-full opacity-50"></div>
        <div className="absolute right-20 -top-10 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
      </section>

      {/* Recent Questions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Questions</h2>
          <Link to="/hoi-dap" className="text-sm font-semibold text-purple-500 hover:text-purple-700">View all</Link>
        </div>
        <div className="space-y-4">
          {questions.slice(0, 3).map(q => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      </section>

      {/* Latest Blogs */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Fun Reading</h2>
          <Link to="/blog" className="text-sm font-semibold text-purple-500 hover:text-purple-700">Read more</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.slice(0, 2).map(p => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
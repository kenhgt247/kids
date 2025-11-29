import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../../store';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const { posts } = useApp();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="text-center py-10">Post not found</div>;

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
      <div className="h-64 overflow-hidden relative">
         <img src={post.imageUrl || 'https://picsum.photos/800/400'} alt={post.title} className="w-full h-full object-cover" />
         <Link to="/blog" className="absolute top-4 left-4 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white transition-colors">
           <ArrowLeft className="w-5 h-5 text-gray-700" />
         </Link>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
           <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-bold text-xs">{post.category}</span>
           <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.createdAt}</span>
           <span>by {post.authorName}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">{post.title}</h1>
        
        <div className="prose prose-purple max-w-none text-gray-600">
           {/* In a real app, this would be a Markdown renderer */}
           <p className="mb-4">{post.content}</p>
           <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <h3>Why is this important?</h3>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
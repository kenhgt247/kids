import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface Props {
  post: Post;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-purple-50 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={post.imageUrl || 'https://picsum.photos/400/250'} 
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-purple-600 text-xs font-bold px-2 py-1 rounded-md">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
          {post.content}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span>{post.authorName}</span>
          <span>{post.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
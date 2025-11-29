import React from 'react';
import { useApp } from '../../store';
import BlogCard from '../../components/BlogCard';

const BlogList = () => {
  const { posts } = useApp();

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Learning Blog 📚</h1>
        <p className="text-gray-500">Tips, stories, and educational adventures.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
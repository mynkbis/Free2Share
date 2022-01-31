import React from 'react';
import PostCard from './PostCard';

function PostSection() {
  return <div>
      <div className='flex flex-wrap items-center mt-20 mb-20'>
      <PostCard />
      <PostCard />
      <PostCard />
      </div>
      
  </div>;
}

export default PostSection;

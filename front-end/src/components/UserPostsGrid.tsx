import React from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import { UserPostsGridProps } from '../types';

const UserPostsGrid: React.FC<UserPostsGridProps> = ({
  posts,
  onDelete,
  onOpenNewPostModal,
}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
      <div
        onClick={onOpenNewPostModal}
        className='border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-[293px] w-full cursor-pointer hover:bg-gray-50'
      >
        <div className='text-center text-gray-500'>
          <PlusCircle className='mx-auto mb-2' />
          <p className='text-sm'>New Post</p>
        </div>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className='relative bg-white border overflow-hidden text-ellipsis rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 h-[293px] w-full'
        >
          <button
            className='absolute top-2 right-2 text-red-color hover:text-red-500'
            onClick={() => onDelete(post.id)}
          >
            <Trash2 size={12} />
          </button>
          <h2
            title={post.title}
            className='text-primary mb-4 text-[18px] leading-[20px] font-medium tracking-normal w-[95%]'
          >
            {post.title}
          </h2>
          <p
            title={post.body}
            className='text-primary font-inter text-sm font-normal tracking-normal line-clamp-9'
          >
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserPostsGrid;

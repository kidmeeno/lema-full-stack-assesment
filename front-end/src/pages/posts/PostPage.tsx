import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import NewPostModal from '../../components/NewPostModal';
import { useDeleteUserPost } from '../../api/useDeletePost';
import { useGetPosts } from '../../api/useGetPosts';
import Loader from '../../components/Loader';
import UserPostsGrid from '../../components/UserPostsGrid';

export default function PostsPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleteing] = useState(false);
  const deletPost = useDeleteUserPost();

  const {
    data: user,
    error,
    refetch,
    isFetching,
    isLoading,
  } = useGetPosts(id || '');

  const handleDeletePost = (postId: string) => {
    setIsDeleteing(true)
    deletPost
      .mutateAsync(postId)
      .then(() => {
        refetch();
        setIsDeleteing(false)
      })
      .catch(() => {setIsDeleteing(false)});
  };

  const handleCloseModal =()=>{
    setIsModalOpen(false);
  }
  const isCompLoading = isFetching||isDeleting

  if (isLoading) return <Loader />;
  if (error || !user)
    return <div className='p-6'>Failed to load user data.</div>;

  return (
    <div className='max-w-4xl mx-auto p-8 font-inter'>
      <Link to='/'>
        <button className='py-4 flex gap-2 items-center disabled:opacity-50 text-[14px] leading-[20px] font-semibold tracking-normal text-primary'>
          <ArrowLeft size={20} />
          Back to Users
        </button>
      </Link>
      <h1 className='text-2xl text-[36px] leading-[72px] font-medium tracking-normal'>
        {user.user.name}
      </h1>
      <p className='text-sm text-primary font-normal tracking-normal'>
        {user.user.email} &bull;{' '}
        <span className='font-medium'>{user.posts.length} Posts</span>
      </p>
      {isCompLoading && <Loader height='50vh' width='200px' />}
      {!isCompLoading && (
        <UserPostsGrid
          posts={user.posts}
          onDelete={handleDeletePost}
          onOpenNewPostModal={() => setIsModalOpen(true)}
        />
      )}
      <NewPostModal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        fetchPosts={refetch}
        userId={user.user.id}
      />
    </div>
  );
}

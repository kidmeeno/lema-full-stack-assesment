import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { NewPostModalProps } from '../types';
import { useCreateUserPost } from '../api/useCreatePost';
import Loader from './Loader';
import TextInputWithCount from './forms/TextInput';
import TextAreaWithCount from './forms/TextArea';
import { MAX_POST_CHAR_LENGHT, MAX_TITLE_CHAR_LENGHT } from '../lib/utils';


export default function NewPostModal({
  isOpen,
  closeModal,
  userId,
}: NewPostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const createPost = useCreateUserPost(userId);
  const disableButton = !title || !content || isLoading;

  const handleCreatePost = () => {
    if (title.length > MAX_TITLE_CHAR_LENGHT || content.length > MAX_POST_CHAR_LENGHT) return;
    setIsloading(true);
    createPost
      .mutateAsync({
        title,
        body: content,
      })
      .then(() => {
        setTitle('');
        setContent('');
        setIsloading(false);
        closeModal();
      })
      .catch(() => {
        setIsloading(false);
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-200'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-150'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-[678px] sm:rounded-lg transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title className='text-primary-dacker text-4xl font-medium tracking-normal'>
                  New Post
                </Dialog.Title>

                <div className='mt-4'>
                  <TextInputWithCount
                    label='Post title'
                    placeholder='Give your post a title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={MAX_TITLE_CHAR_LENGHT}
                  />
                </div>

                <div className='mt-4'>
                  <TextAreaWithCount
                    label='Post content'
                    placeholder='Write something mind-blowing'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={MAX_POST_CHAR_LENGHT}
                  />
                </div>


                <div className='mt-6 flex justify-end space-x-2'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200'
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    onClick={handleCreatePost}
                    disabled={disableButton}
                    className='px-4 py-2 rounded-md bg-primary-bg text-white disabled:opacity-50'
                  >
                    {isLoading ? (
                      <span className='flex items-center gap-2'>
                        Publish <Loader height='20px' width='20px' />
                      </span>
                    ) : (
                      'Publish'
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

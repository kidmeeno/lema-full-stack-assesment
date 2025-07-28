import { useMutation } from '@tanstack/react-query';
import { ENDPOINTS, MUTATION_KEYS } from '../lib/constants';
import axios from 'axios';
import { toast } from 'react-toastify';

export function useCreateUserPost(id: string) {
  return useMutation({
    mutationKey: [MUTATION_KEYS.POST.CREATE_POST],
    mutationFn: async (payload:{title:string,body:string}) => {
      const url = ENDPOINTS.API_BASE_DEV_URL + ENDPOINTS.POSTS.CREATE_POST(id);
      try {
        const res = await axios.post(url,payload);
        toast.success('Post created successfully');
        return res?.data?.data;
      } catch (error) {
        toast.error('Failed to create post');
      }
    },
  });
}

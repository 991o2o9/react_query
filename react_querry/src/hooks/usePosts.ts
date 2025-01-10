import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { IPost } from '../type/post.types';
import { postService } from '../services/post.service';

export const usePosts = (isEnabled: boolean) => {
  const initialData: { data: IPost[] } = {
    data: [
      {
        body: 'Initial body',
        id: 0,
        title: 'initial title',
        userId: 0,
      },
    ],
  };

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: postService.getPosts,
    select: (data) => data.data,
    enabled: isEnabled,
    initialData,
  });

  useEffect(() => {
    if (isSuccess) console.log('data fetched successfully');
  }, [isSuccess]);

  useEffect(() => {
    if (isError) console.log('data fetched wrongly');
  }, [isError]);

  return { data, isLoading, isSuccess, isError };
};

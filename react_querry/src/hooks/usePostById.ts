import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/post.service';

export const usePostById = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => postService.getPost(id),
    select: (data) => data.data,
    enabled: !!id,
  });

  return { post: data, isLoading };
};

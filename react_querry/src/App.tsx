/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import './App.css';
import { usePostById } from './hooks/usePostById';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import { IPost } from './type/post.types';

const isAuth = true;

function App() {
  const { isLoading, data } = usePosts(isAuth);
  const { post } = usePostById(2);

  // const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['add post'],
    mutationFn: async (newPost: Omit<IPost, 'id'>) =>
      axios.post(`https://jsonplaceholder.typicode.com/posts/`, newPost),
  });

  // queryClient.invalidateQueries({ queryKey: ['posts'] });
  return (
    <>
      <h1>Vite + React</h1>
      <button
        onClick={() => {
          mutate({
            body: 'new body',
            title: 'new title',
            userId: 1,
          });
        }}
        disabled={isPending}
      >
        {isPending ? 'loading...' : 'create'}
      </button>
      <div className="flex flex-col gap-[10px]">
        <h2 className="p-0 m-0">recommended post:</h2>
        <div className="bg-[#2B373E]">
          <span className="">{post?.title}</span>
        </div>
      </div>
      <div>
        {isLoading ? (
          'Loading...'
        ) : data?.length ? (
          data.map((post: any, index: number) => (
            <div key={index}>{post.title}</div>
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    </>
  );
}

export default App;

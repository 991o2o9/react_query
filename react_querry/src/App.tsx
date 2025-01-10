/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import './App.css';
const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts  `);
  return response.json();
};
function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getData,
  });

  return (
    <>
      <h1>Vite + React</h1>
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

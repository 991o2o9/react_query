import axios from 'axios';
import { IPost } from '../type/post.types';

class PostService {
  getPosts() {
    return axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts  `);
  }

  getPost(id: number) {
    return axios.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id} `
    );
  }
}
export const postService = new PostService();

import {jsonPlaceholderApi} from "@/src/services/config/api-config";
import {Post} from "@/src/models/post";

export type PaginationType = {
  page: number,
  limit: number
}

export class PostService {
  public static getPosts({page, limit = 10}: PaginationType): Promise<Post[]> {
    const response = jsonPlaceholderApi.get<Post[]>(`/posts?_page=${page}&_limit=${limit}`);

    return response.then(posts => posts.data)
  }

  public static addPost(post: Post): Promise<Post> {
    const response = jsonPlaceholderApi.post<Post>('/posts', post)

    return response.then(posts => posts.data)
  }

  public static editPost(post: Post): Promise<Post> {
    const response = jsonPlaceholderApi.put<Post>(`/posts/${post.id}`, post)

    return response.then(posts => posts.data)
  }

  public static deletePost(): Promise<void> {
    const response = jsonPlaceholderApi.delete('/posts')

    return response.then(posts => posts.data)
  }
}
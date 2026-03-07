import {useQuery} from "@tanstack/react-query";
import {jsonPlaceholderApi} from "@/src/services/config/api-config";
import {Post} from "@/src/models/post";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["post"],
    queryFn: ({signal}) => {
      const response = jsonPlaceholderApi.get<Post[]>('/posts',{signal})
      return response.then(post => post.data)
    },
    retry: false,
    staleTime: 1000 * 60 * 5
  });
}
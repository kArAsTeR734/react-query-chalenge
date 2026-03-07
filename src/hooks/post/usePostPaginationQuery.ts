import {useInfiniteQuery} from "@tanstack/react-query";
import {Post} from "@/src/models/post";
import {PostService} from "@/src/services/services/PostService";

export const usePostPaginationQuery = ({initialData}:{initialData:Post[]}) => {
  return useInfiniteQuery({
    queryKey: ['post'],
    queryFn: ({pageParam = 1}) => PostService.getPosts({page: pageParam, limit: 10}),
    initialPageParam:1,
    initialData: {
      pages:[initialData],
      pageParams:[1]
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < 10 ? null : allPages.length + 1;
    },
    maxPages:10
  })
}
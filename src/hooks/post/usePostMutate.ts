'use client'

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Post} from "@/src/models/post";
import {PostService} from "@/src/services/services/PostService";

export const usePostMutate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["post"],
    mutationFn: (post: Post) => PostService.editPost(post),
    onSuccess:(updatedPost) => {
      queryClient.invalidateQueries({ queryKey: ["post", updatedPost.id] });
    }
  })
}
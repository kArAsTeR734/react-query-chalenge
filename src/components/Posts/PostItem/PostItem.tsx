'use client'

import React from 'react';
import {Post} from "@/src/models/post";
import {usePostMutate} from "@/src/hooks/post/usePostMutate";

const PostItem = (post: Post) => {
  const editPostMutate = usePostMutate();

  const updatePost = () => {
    editPostMutate.mutate({
      userId: 1,
      id: 2,
      title: 'Nikita',
      body: 'Hello World! I am Nikita!'
    })
  }

  return (
    <li className="w-full font-normal p-4 bg-blue-500 rounded-md text-white cursor-pointer" key={post.id} onClick={() => updatePost()}>
        {post.id}. {post.title}
    </li>
  );
};

export default PostItem;
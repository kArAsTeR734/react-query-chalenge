'use client'
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {Post} from "@/src/models/post";
import {jsonPlaceholderApi} from "@/src/services/config/api-config";
import {usePostMutate} from "@/src/hooks/post/usePostMutate";

export default function EditPostForm({ postId }: { postId: number }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { data: postById } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await jsonPlaceholderApi.get<Post>(`posts/${postId}`);
      return data;
    },
    enabled: !!postId,
  });

  const editPostMutate = usePostMutate();
  useEffect(() => {
    if (postById) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(postById.title);
      setBody(postById.body);
    }
  }, [postById]);

  const handleMutate = (e: React.FormEvent) => {
    e.preventDefault();
    editPostMutate.mutate({
      userId:1,
      id:2,
      title:title,
      body:body
    })
  };

  return (
    <form onSubmit={handleMutate} className="flex flex-col gap-3">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="text-black p-2 border"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        className="text-black p-2 border"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 cursor-pointer">{editPostMutate.isPending ? 'Сохранение...' : 'Сохранить'}</button>
    </form>
  );
}

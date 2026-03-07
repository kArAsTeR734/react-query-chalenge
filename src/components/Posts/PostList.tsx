'use client'

import {Post} from "@/src/models/post";
import {useInView} from "react-intersection-observer";
import {usePostPaginationQuery} from "@/src/hooks/post/usePostPaginationQuery";
import {useEffect} from "react";
import PostItem from "@/src/components/Posts/PostItem/PostItem";

const PostList = ({initialData}: { initialData: Post[] }) => {
  const {ref, inView} = useInView();
  const {data, hasNextPage, fetchNextPage, isFetchingNextPage} = usePostPaginationQuery({initialData})

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <ul className="m-8 flex flex-col gap-3">
        {data.pages.map((posts, i) => (
          <div key={i} className="contents flex flex-col gap-3">
            {posts.map(post => (
              <PostItem key={post.id} {...post}/>
            ))}
          </div>
        ))}
      </ul>
      <div ref={ref} className="h-10 flex justify-center">
        {isFetchingNextPage ? 'Загрузка...' : hasNextPage ? 'Скролльте ниже' : 'Все данные загружены'}
      </div>
    </div>
  );
};

export default PostList;
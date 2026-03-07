import PostList from "@/src/components/Posts/PostList";
import QueryActions from "@/src/components/QueryActions";
import {PostService} from "@/src/services/services/PostService";

export default async function PostPage() {
  const firstPagePosts = await PostService.getPosts({page: 1, limit: 10});
  return (
    <>
      <h1 className="text-5xl font-semibold text-black">Это Post Page</h1>
      <QueryActions/>
      <PostList initialData={firstPagePosts}/>
    </>
  );
};

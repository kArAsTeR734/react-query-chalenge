import EditPostForm from "@/src/components/Posts/EditPostForm";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postId = Number(slug);

  return (
    <div className="w-full max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Редактирование поста #{postId}</h1>
      <EditPostForm postId={postId} />
    </div>
  );
}

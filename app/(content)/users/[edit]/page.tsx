import EditUserForm from "@/src/components/Users/EditUserForm";

export default async function EditUserPage ({params}:{ params: Promise<{ edit: string }> }){
  const { edit } = await params;

  return (
    <div className="w-full max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Редактирование пользователя #{edit}</h1>
      <EditUserForm userId={edit} />
    </div>
  );
};

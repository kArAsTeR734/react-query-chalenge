import UserList from "@/src/components/Users/UserList";
import QueryActions from "@/src/components/QueryActions";
import CreateUserForm from "@/src/components/Users/CreateUserForm";

const UsersPage = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold text-black">Это Users Page</h1>
      <QueryActions/>
      <CreateUserForm/>
      <UserList/>
    </>

  );
};

export default UsersPage;
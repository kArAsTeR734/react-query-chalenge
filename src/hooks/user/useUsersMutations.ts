import {useMutation, useQueryClient} from "@tanstack/react-query";
import {User} from "@/src/models/user";
import {UserService} from "@/src/services/services/UserService";
import {useRouter} from "next/navigation";

interface MutationContext {
  prevData: User[] | undefined;
}

export const useUserCreateMutate = () => {
  const queryClient = useQueryClient()

  return useMutation<User, Error, User, MutationContext>({
    mutationKey: ["createUser"],
    mutationFn: (user: User) => UserService.addUser(user),
    onMutate: (newUser: User) => {
      queryClient.cancelQueries({queryKey: ["user"]})

      const prevData = queryClient.getQueryData<User[]>(["user"]);

      queryClient.setQueryData<User[]>(["user"], (old) => [
        {...newUser, isOptimistic:true},
        ...(old || []),
      ]);

      return {prevData};
    },
    onError: (_, __, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["user"], context.prevData);
      } else {
        queryClient.setQueryData(["user"], []);
      }
    },
    onSettled: () => {
      console.log('Пользователь создан');
    }
  })
}

export const useUserEditMutate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (user: User) => UserService.editUser(user),
    onSuccess: (editedUser) => {
      queryClient.invalidateQueries({queryKey: ["user", editedUser.id]})

      router.push('/users')

      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      throw Error(error.message);
    }
  })
}

export function useUserDeleteMutate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => UserService.deletePost(userId),
    onSuccess: (_, idParam) => {
      queryClient.setQueryData<User[]>(["user"], (users) => users?.filter(user => user.id !== idParam));
    },
    onError: () => {
      console.log('Не удалось удалить пользователя')
    },
    onSettled: () => {
      console.log('Пользователь удалён')
    }
  })
}
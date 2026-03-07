import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/src/services/services/UserService";

export const useUserQuery = () => {
  return useQuery({
    queryKey:["user"],
    queryFn: UserService.getUsers,
    staleTime: 1000 * 30,
    retry:false,
    refetchOnMount:true,
    select: (users) => users.find(u => u.username === "Zalupa")
  })
}
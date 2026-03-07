import {jsonServerApi} from "@/src/services/config/api-config";
import {User} from "@/src/models/user";

export type PaginationType = {
  page: number,
  limit: number
}

export class UserService {
  public static getUsers(): Promise<User[]> {
    const response = jsonServerApi.get<User[]>(`/users`);

    return response.then(users => users.data)
  }

  public static addUser(user: User): Promise<User> {
    const response = jsonServerApi.post<User>('/users', user)
    return response.then(user => user.data)
  }

  public static editUser(user: User): Promise<User> {
    const response = jsonServerApi.put<User>(`/users/${user.id}`, user)

    return response.then(user => user.data)
  }

  public static deletePost(userId: string): Promise<User> {
    const response = jsonServerApi.delete<User>(`/users/${userId}`)

    return response.then(user => user.data)
  }
}
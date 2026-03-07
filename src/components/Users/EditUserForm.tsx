'use client'
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {jsonServerApi} from "@/src/services/config/api-config";
import {useUserEditMutate} from "@/src/hooks/user/useUsersMutations";
import {User} from "@/src/models/user";

export default function EditUserForm({userId}: { userId: string }) {
  const [username, setUsername] = useState<string>('Ivan');
  const [age, setAge] = useState<number>(10);

  const { data: userById } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const { data } = await jsonServerApi.get<User>(`users/${userId}`);
      return data;
    },
    initialData: {
      id:"",
      username:"Ivan",
      age:10
    },
    enabled: !!userId,
  });

  const editUserMutate = useUserEditMutate();

  useEffect(() => {
    if (userById) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUsername(userById.username);
      setAge(userById.age);
    }
  }, [userById]);

  const handleMutate = (e: React.FormEvent) => {
    e.preventDefault();
    editUserMutate.mutate({
      id:userId,
      username:username,
      age:age
    })
  };

  return (
    <form onSubmit={handleMutate} className="flex flex-col gap-3">
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="text-black p-2 border"
      />
      <input
        value={age}
        onChange={e => setAge(Number(e.target.value))}
        className="text-black p-2 border"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 cursor-pointer">{editUserMutate.isPending ? 'Сохранение...' : 'Сохранить'}</button>
    </form>
  );
}

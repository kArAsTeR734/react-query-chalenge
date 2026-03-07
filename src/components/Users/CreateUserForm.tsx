'use client'
import React, {useState, useEffect} from "react";
import {useUserCreateMutate} from "@/src/hooks/user/useUsersMutations";

export default function CreateUserForm() {
  const [username, setUsername] = useState<string>('Ivan');
  const [age, setAge] = useState<number>(10);

  const createUserMutate = useUserCreateMutate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUsername(username);
    setAge(age);
  }, [age, username]);

  const handleMutate = (e: React.SubmitEvent) => {
    e.preventDefault();
    createUserMutate.mutate({
      id: String(Date.now()),
      username: username,
      age: age
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
      <button type="submit"
              className="bg-blue-600 text-white p-2 cursor-pointer">{createUserMutate.isPending ? 'Создание...' : 'Создать'}</button>
    </form>
  );
}

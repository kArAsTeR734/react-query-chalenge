'use client'

import React from 'react';
import {User} from "@/src/models/user";
import Link from "next/link";
import {useUserDeleteMutate} from "@/src/hooks/user/useUsersMutations";

const UserItem = (user: User & { isOptimistic?: boolean }) => {
  const deleteUserMutate = useUserDeleteMutate();

  const handleDelete = () => {
    deleteUserMutate.mutate(user.id);
  }

  return (
    <li
      className={`w-full font-normal p-4 bg-blue-500 rounded-md text-white border transition-opacity ${user.isOptimistic ? 'opacity-50 grayscale' : 'opacity-100'} cursor-pointer flex items-center gap-3`}
      key={user.id}>
      <Link href={`users/${user.id}`}>{user.id}. {user.username} - {user.age}</Link>
      <button className=" p-2 font-medium bg-red-500 rounded-md text-white cursor-pointer"
              onClick={handleDelete}>
        {deleteUserMutate.isPending ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default UserItem;
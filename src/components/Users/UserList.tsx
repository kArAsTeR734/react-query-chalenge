'use client'

import React from 'react';
import {useUserQuery} from "@/src/hooks/user/useUserQuery";
import UserItem from "@/src/components/Users/UserItem/UserItem";
import {User} from "@/src/models/user";

const UserList = () => {
  const {data: users, isPending} = useUserQuery();


  if (isPending) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <h1 className='font-bold text-lg'>Идёт загрузка данных...</h1>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      {users &&
        <ul className="m-8 flex flex-col gap-3">
          <div className="contents flex flex-col gap-3">
            {
              Array.isArray(users) ? (
                users.map((user: User) => (
                  <UserItem key={user.id} {...user}/>
                ))
              ) : (
                users && <UserItem {...users}/>
              )
            }
          </div>
        </ul>
      }
    </div>
  );
};

export default UserList;
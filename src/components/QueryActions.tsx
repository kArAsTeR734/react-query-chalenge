'use client'

import {useQueryClient} from "@tanstack/react-query";

const QueryActions = () => {
  const client = useQueryClient();

  const handleInvalidate = () => {
    console.log('invalidate');
    client.invalidateQueries({queryKey: ["post"]})
  }

  const handleCancelQuery = () => {
    client.cancelQueries({queryKey:["post"]})
  }

  const handleRemoveQuery = () => {
    client.removeQueries({queryKey:["post"]})
  }

  const handleRefetchQuery = () => {
    client.refetchQueries({queryKey:["post"]})
  }

  return (
    <div className='flex items-center justify-between gap-3'>
      <button className="rounded-md text-white text-sm font-medium p-3 bg-orange-500 cursor-pointer"
              onClick={() => handleInvalidate()}>
        Invalidate
      </button>
      <button className="rounded-md text-white text-sm font-medium p-3 bg-red-500 cursor-pointer"
              onClick={() => handleCancelQuery()}>
        Cancel Query
      </button>
      <button className="rounded-md text-white text-sm font-medium p-3 bg-amber-500 cursor-pointer"
              onClick={() => handleRemoveQuery()}>
        Remove Query
      </button>
      <button className="rounded-md text-white text-sm font-medium p-3 bg-green-500 cursor-pointer"
              onClick={() => handleRefetchQuery()}
      >
        Refetch Query
      </button>
    </div>
  );
};

export default QueryActions;
import React from 'react';
import { useQuery } from '../hooks';

const ProfileSuccess = () => {
  const { data, status } = useQuery(`/profile`);
  return (
    <div className="flex flex-col">
      {status === 'loading' && (
        <>
          <div className="h-4 bg-gray-200 mb-2 rounded-full w-32 dark:bg-slate-600" />
          <div className="h-4 bg-gray-200 rounded-full w-52 dark:bg-slate-700" />
        </>
      )}
      {status === 'error' && <>Eroare la incarcare!</>}
      {status === 'success' && (
        <>
          <p className="text-gray-900 font-semibold dark:text-white">{data.email}</p>
          <p className="text-gray-600 dark:text-slate-300">{data.job}</p>
        </>
      )}
    </div>
  );
};

export default ProfileSuccess;

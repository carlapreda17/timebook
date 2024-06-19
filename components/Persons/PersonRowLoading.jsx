import React from 'react';
import Tooltip from '../Tooltip';

const PersonRowLoading = () => {
  return (
    <tr className=" even:bg-gray-100  cursor-pointer hover:text-blue-500">
      <td className="p-4 px-8 font-bold  ">
        <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
      </td>
      <td className="p-4 w-80">
        <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
      </td>
      <td className="p-4 w-24">
        <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
      </td>
      <td className="p-4 w-72">
        <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
      </td>
      <td className="p-4 w-28">
        <div className="flex justify-around">
          <button title="Editeaza">
            <Tooltip icon="fas fa-edit text-blue-500 text-lg">Editeaza</Tooltip>
          </button>
          <button title="Șterge">
            <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Șterge</Tooltip>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PersonRowLoading;

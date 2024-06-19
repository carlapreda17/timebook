import React from 'react';
import Tooltip from '../Tooltip';

const ActivityRowError = () => {
  return (
    <tr className="even:bg-gray-100 cursor-pointer">
      <td className="p-4 px-8 w-24">
        <p className="w-24">
          <div className="h-4 bg-red-200 rounded-md w-full animate-pulse" />
        </p>
      </td>
      <td className="p-4 w-24">
        <span className="w-24">
          <div className="h-4 bg-red-200 rounded-md w-full " />
        </span>
      </td>
      <td className="p-4 w-80 whitespace-pre-wrap">
        <p className=" w-full line-clamp-1">
          <div className="h-4 bg-red-200 rounded-md w-full " />
        </p>
      </td>
      <td className="p-4 w-28">
        <span className="w-28">
          <div className="h-4 bg-red-200 rounded-md w-full " />
        </span>
      </td>
      <td className="p-4 whitespace-pre-wrap">
        <p className="line-clamp-2">
          <div className="h-4 bg-red-200 rounded-md w-full " />
        </p>
      </td>
      <td className="p-4 w-28">
        <div className="flex justify-center w-28 gap-2 mr-4">
          <div className="flex items-center gap-4 relative">
            <div className="hidden md:flex items-center space-x-2 cursor-pointer p-2" role="button">
              <i className="fa-solid fa-ellipsis-vertical" />
            </div>
          </div>
          <button title="Informatii">
            <Tooltip icon="fa-solid fa-circle-info text-blue-500 text-lg">Informatii</Tooltip>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ActivityRowError;

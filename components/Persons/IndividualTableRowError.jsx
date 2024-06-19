import React from 'react';
import Tooltip from '../Tooltip';

const IndividualTableRowError = () => {
  return (
    <>
      <tr className="even:bg-gray-100 cursor-pointer">
        <td className="p-4 px-8 w-24">
          <p className="w-24">
            <div className="h-4 bg-red-200 rounded-md w-full animate-pulse" />
          </p>
        </td>
        <td className="p-4 w-24">
          <span className="w-24">
            <div className="h-4 bg-red-200 rounded-md w-full animate-pulse" />
          </span>
        </td>
        <td className="p-4 w-52 max-w-52">
          <p className=" w-full line-clamp-1">
            <div className="h-4 bg-red-200 rounded-md w-full animate-pulse" />
          </p>
        </td>
        <td className="p-4 whitespace-pre-wrap">
          <p className="line-clamp-2">
            <div className="h-4 bg-red-200 rounded-md w-full animate-pulse" />
          </p>
        </td>
        <td className="p-4 w-24">
          <div className="flex w-24">
            <Tooltip icon="fas fa-edit text-blue-500 text-lg">
              <button title="Editeaza">Editeaza</button>
            </Tooltip>

            <button title="Șterge">
              <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Șterge</Tooltip>
            </button>

            <Tooltip icon="fa-solid fa-check-double text-green-500 text-lg">
              <button title="Aproba">Aproba</button>
            </Tooltip>
          </div>
        </td>
      </tr>
    </>
  );
};

export default IndividualTableRowError;

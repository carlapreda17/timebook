import React from 'react';

const PersonalTimeSheetErrorRow = () => {
  return (
    <tr className="even:bg-gray-100 cursor-pointer">
      <td className="p-4 px-8 w-24">
        <p className="w-24">
          <div className="h-4 bg-red-200 rounded-md w-full" />
        </p>
      </td>
      <td className="p-4 w-24">
        <span className="w-24">
          <div className="h-4 bg-red-200 rounded-md w-full" />
        </span>
      </td>
      <td className="p-4 w-52 max-w-52">
        <p className=" w-full line-clamp-1">
          <div className="h-4 bg-red-200 rounded-md w-full" />
        </p>
      </td>
      <td className="p-4 whitespace-pre-wrap">
        <p className="line-clamp-2">
          <div className="h-4 bg-red-200 rounded-md w-full" />
        </p>
      </td>
      <td className="p-4 w-24"></td>
    </tr>
  );
};

export default PersonalTimeSheetErrorRow;

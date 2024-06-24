import React from 'react';

const VacationsTableUserHead = () => {
  return (
    <thead>
      <tr className="border border-transparent bg-primary">
        <td className="p-3 text-gray-200 tablet:text-xs">Tip</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Data de început</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Data de sfărșit</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Durată</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Mesaj</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Status</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Acțiuni</td>
      </tr>
    </thead>
  );
};

export default VacationsTableUserHead;

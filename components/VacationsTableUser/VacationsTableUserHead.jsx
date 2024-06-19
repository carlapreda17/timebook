import React from 'react';

const VacationsTableUserHead = () => {
  return (
    <thead>
      <tr className="border border-transparent bg-primary">
        <td className="p-3 text-gray-200">Tip</td>
        <td className="p-3 text-gray-200">Data de început</td>
        <td className="p-3 text-gray-200">Data de sfărșit</td>
        <td className="p-3 text-gray-200">Durată</td>
        <td className="p-3 text-gray-200">Mesaj</td>
        <td className="p-3 text-gray-200">Status</td>
        <td className="p-3 text-gray-200">Acțiuni</td>
      </tr>
    </thead>
  );
};

export default VacationsTableUserHead;

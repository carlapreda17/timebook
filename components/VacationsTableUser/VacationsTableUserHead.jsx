import React from 'react';

const VacationsTableUserHead = () => {
  return (
    <thead>
      <tr className="border border-transparent bg-primary">
        <td className="table-head-text">Tip</td>
        <td className="table-head-text">Data de început</td>
        <td className="table-head-text">Data de sfărșit</td>
        <td className="table-head-text">Durată</td>
        <td className="table-head-text">Mesaj</td>
        <td className="table-head-text">Status</td>
        <td className="table-head-text">Acțiuni</td>
      </tr>
    </thead>
  );
};

export default VacationsTableUserHead;

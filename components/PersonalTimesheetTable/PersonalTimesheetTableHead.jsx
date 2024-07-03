import React from 'react';
import { Checkbox } from '../Fields';

const PersonalTimesheetTableHead = ({ checked, toggleAll }) => {
  return (
    <thead>
      <tr className="border-b bg-primary">
        <th className="p-3 w-8">
          <Checkbox
            checked={checked}
            onChange={toggleAll}
            className={
              'form-checkbox p-2 cursor-pointer checked:bg-primary ring-primary checked:border checked:border-white'
            }
          />
        </th>
        <th className="table-head-text">Data</th>
        <th className="table-head-text">Durata</th>
        <th className="table-head-text">Proiect</th>
        <th className="table-head-text">Descriere</th>
        <th className="table-head-text text-center">Actiuni</th>
      </tr>
    </thead>
  );
};

export default PersonalTimesheetTableHead;

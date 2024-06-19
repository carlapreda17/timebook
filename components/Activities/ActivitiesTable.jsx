import React from 'react';
import ActivityRow from './ActivityRow';
import { Checkbox } from '../Fields';

const ActivitiesTable = ({ data, selectedRows, setSelectedRows, refetch }) => {
  let sortedActivities = data.sort((a, b) => b.date.localeCompare(a.date));
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      for (let i = 0; i < data.length; i++) {
        if (!selectedRows.includes(data[i]._id)) {
          setSelectedRows((selectedRows) => [...selectedRows, data[i]._id]);
        }
      }
      console.log(selectedRows);
    } else {
      setSelectedRows([]);
    }
  };
  return (
    <table className="w-full border-collapse mt-4">
      <thead className="bg-gray-100">
        <tr className="text-xs text-primary border-b">
          <td className="w-1.5 p-4">
            {' '}
            <Checkbox checked={selectedRows.length !== 0 && 'checked'} onChange={handleSelectAll} />
          </td>
          <td className="font-bold p-4 text-sm px-8">Data</td>
          <td className="font-bold p-4 text-sm">Durata</td>
          <td className="font-bold p-4 text-sm">Proiectul asociat</td>
          <td className="font-bold p-4 text-sm">Persoana</td>
          <td className="font-bold p-4 text-sm">Descrierea taskului</td>
          {/* <td className="font-bold p-4 text-sm">Creat</td>
            <td className="font-bold p-4 text-sm">Editat</td>
             */}
          <td className="font-bold p-4 text-sm"></td>
        </tr>
      </thead>
      <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
        {sortedActivities.map((e) => {
          return (
            <ActivityRow
              key={e._id}
              {...e}
              id={e._id}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              refetch={refetch}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ActivitiesTable;

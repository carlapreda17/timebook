import React from 'react';
import IndividualRow from './IndividualRow';
import { Checkbox } from '../Fields';

const IndividualTable = ({ data, selectedRows, setSelectedRows, refetch }) => {
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      for (let i = 0; i < data.length; i++) {
        if (!selectedRows.includes(data[i]._id)) {
          setSelectedRows((selectedRows) => [...selectedRows, data[i]._id]);
        }
      }
    } else {
      setSelectedRows([]);
    }
  };
  return (
    <>
      <table className="w-full border-collapse mt-4">
        <thead className="bg-gray-100">
          <tr className="text-xs text-primary border-b">
            <td className="pl-8 w-1.5">
              <Checkbox
                checked={selectedRows.length !== 0 && 'checked'}
                onChange={handleSelectAll}
              />
            </td>
            <td className="font-bold p-4 text-sm">Data</td>
            <td className="font-bold p-4 text-sm">Durata</td>
            <td className="font-bold p-4 text-sm">Proiectul asociat</td>
            <td className="font-bold p-4 text-sm">Descrierea taskului</td>
            <td className="font-bold p-4 text-sm"></td>
          </tr>
        </thead>
        <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
          {data.map((e) => {
            return (
              <IndividualRow
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
    </>
  );
};

export default IndividualTable;

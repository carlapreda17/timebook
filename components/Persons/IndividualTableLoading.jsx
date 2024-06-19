import React from 'react';
import IndividualRowLoading from './IndividualRowLoading';

const IndividualTableLoading = () => {
  return (
    <>
      <h2 className="font-bold text-xl px-8 mt-5">
        <div className="flex">
          Intrari:
          <div className=" bg-gray-200 rounded-md w-10 animate-pulse" />
        </div>
      </h2>
      <h2 className="font-bold text-xl px-8">
        <div className="flex">
          Timp muncit:
          <div className=" bg-gray-200 rounded-md w-10 animate-pulse" />
        </div>
      </h2>
      <table className="w-full border-collapse mt-4">
        <thead className="bg-gray-100">
          <tr className="text-xs text-primary border-b">
            <td className="font-bold p-4 text-sm px-8">Data</td>
            <td className="font-bold p-4 text-sm">Durata</td>
            <td className="font-bold p-4 text-sm">Proiectul asociat</td>
            <td className="font-bold p-4 text-sm">Descrierea taskului</td>
            <td className="font-bold p-4 text-sm"></td>
          </tr>
        </thead>
        <tbody className="divide-y whitespace-nowrap text-sm text-gray-500">
          <IndividualRowLoading />
          <IndividualRowLoading />
          <IndividualRowLoading />
          <IndividualRowLoading />
          <IndividualRowLoading />
        </tbody>
      </table>
    </>
  );
};

export default IndividualTableLoading;

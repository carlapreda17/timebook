import { PersonalTimeSheetRowSuccess } from '.';

const PersonalTimeSheetSuccess = ({ data }) => {
  return (
    <table className="w-full border-collapse mt-8">
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
        {data.map((e, index) => {
          return <PersonalTimeSheetRowSuccess key={index} {...e} />;
        })}
      </tbody>
    </table>
  );
};

export default PersonalTimeSheetSuccess;

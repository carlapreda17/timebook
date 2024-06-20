const VacationsTableAdminHead = () => {
  return (
    <thead>
      <tr className="border-b bg-primary">
        <td className="p-3 text-gray-200 tablet:text-xs">Nume</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Data de inceput</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Data de sfarsit</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Mesaj</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Status</td>
      </tr>
    </thead>
  );
};

export default VacationsTableAdminHead;

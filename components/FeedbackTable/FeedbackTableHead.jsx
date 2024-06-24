const FeedbackTableHead = () => {
  return (
    <thead>
      <tr className="border-b bg-primary">
        <td className="p-3 text-gray-200 tablet:text-xs">Data</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Utilizator</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Titlu</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Descriere</td>
        <td className="p-3 text-gray-200 tablet:text-xs">Rezolvat</td>
      </tr>
    </thead>
  );
};

export default FeedbackTableHead;

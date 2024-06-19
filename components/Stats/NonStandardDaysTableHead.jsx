const NonStandardDaysTableHead = ({ totalDifference }) => {
  return (
    <thead>
      <tr className="border-b bg-primary text-white">
        <td className="p-3 w-80">Data</td>
        <td className="p-3 w-15">Diferenta</td>
      </tr>
      <tr className="border-b bg-primary">
        <td className="p-3 w-40">
          <span className="text-white">Total:</span>{' '}
        </td>
        <td className="p-3 ">
          {' '}
          <span className="font-bold text-white">{totalDifference}</span>
        </td>
      </tr>
    </thead>
  );
};

export default NonStandardDaysTableHead;

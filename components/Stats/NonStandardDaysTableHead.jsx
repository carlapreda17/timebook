const NonStandardDaysTableHead = ({ totalDifference }) => {
  return (
    <thead>
      <tr className="border-b bg-primary text-white">
        <td className="p-3 sm:w-80 mobile:text-xs">Data</td>
        <td className="p-3 w-15 mobile:text-xs">Diferenta</td>
      </tr>
      <tr className="border-b bg-primary">
        <td className="p-3 w-40">
          <span className="text-white mobile:text-xs">Total:</span>{' '}
        </td>
        <td className="p-3">
          {' '}
          <span className="font-bold text-white mobile:text-xs">{totalDifference}</span>
        </td>
      </tr>
    </thead>
  );
};

export default NonStandardDaysTableHead;

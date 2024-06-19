const LogbookTableStats = ({ stats }) => {
  //eslint-disable-next-line
  console.log({ stats });
  return (
    <tr className="bg-primary text-white rounded-b-xl p-4">
      <td></td>
      <td></td>
      <td className="px-3">
        <span className="">80h</span>
        <span className="">(38)</span>{' '}
      </td>
    </tr>
  );
};

export default LogbookTableStats;

import Tooltip from '../Tooltip';

const VacationTransactionTypeIcon = ({ type }) => {
  return (
    <>
      {type === 'vacation-approved' && (
        <Tooltip icon="fa-solid fa-check text-2xl text-secondary">Aprobat</Tooltip>
      )}
      {type === 'annual' && (
        <Tooltip icon="fa-solid fa-calendar-days text-2xl text-primary">Anual</Tooltip>
      )}
      {type === 'bonus' && (
        <Tooltip icon="fa-solid fa-star text-2xl text-yellow-500">Bonus</Tooltip>
      )}
      {type === 'extra-time' && <Tooltip icon="fa-solid fa-plus text-2xl">Timp extra</Tooltip>}
    </>
  );
};

export default VacationTransactionTypeIcon;

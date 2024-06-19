import Plural from '../Plural';

const VacationTransactionAmount = ({ amount }) => {
  return (
    <span className={amount < 0 ? 'text-red-500' : ''}>
      <Plural count={Math.abs(amount)} one="zi" many="zile" />
    </span>
  );
};

export default VacationTransactionAmount;

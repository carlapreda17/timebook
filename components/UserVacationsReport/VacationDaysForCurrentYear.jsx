import { useQuery } from '../../hooks';
import Plural from '../Plural';

const VacationDaysForCurrentYear = ({ id, currentYear, getTotal }) => {
  const { data, status } = useQuery(`/vacation-transactions`, {
    userId: id,
    year: currentYear,
    type: 'annual',
  });
  return (
    <>
      {status === 'loading' && (
        <h3 className="mt-4 font-bold flex items-center">
          Zile de concediu disponibile pentru {currentYear}:{' '}
          <dd className="h-4 my-1 bg-gray-300 rounded-lg w-8 animate-pulse" />
        </h3>
      )}
      {status === 'error' && (
        <h3 className="mt-4 font-bold flex items-center">
          Zile de concediu disponibile pentru {currentYear}:{' '}
          <dd className="h-4 my-1 bg-red-300 rounded-lg w-8" />
        </h3>
      )}
      {status === 'success' && (
        <h3 className="mt-4 font-bold">
          Zile de concediu disponibile pentru {currentYear}:{' '}
          <Plural count={getTotal(data)} one="zi" many="zile" />
        </h3>
      )}
    </>
  );
};

export default VacationDaysForCurrentYear;

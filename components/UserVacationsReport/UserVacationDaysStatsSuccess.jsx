import { getYear } from 'date-fns';
import Plural from '../Plural';

const VacationDaysStatsSuccess = () => {
  return (
    <div className="flex flex-col">
      <h3 className="mt-4 font-bold">
        Zile de concediu disponibile pentru {getYear(new Date())}:{' '}
        <Plural count={3} one="zi" many="zile" />
      </h3>
      <h3 className="mt-4 font-bold">
        Zile de concediu folosite pentru {getYear(new Date())}:{' '}
        <Plural count={1} one="zi" many="zile" />
      </h3>
      <h3 className="mt-4 font-bold">
        Zile de concediu ramase pentru {getYear(new Date())}:{' '}
        <Plural count={2} one="zi" many="zile" />
      </h3>
    </div>
  );
};

export default VacationDaysStatsSuccess;

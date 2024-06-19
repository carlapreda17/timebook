import { dateLocaleRo } from '../../functions';

const ActivityDate = ({ date }) => {
  return <>{dateLocaleRo(date)}</>;
};

export default ActivityDate;

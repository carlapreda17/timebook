import { dateLocaleRo } from '../../functions';

const StartDateCard = ({ classes, data }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-calendar-days mr-2 text-secondary text-xl" />
        Data de inceput
      </span>{' '}
      <span className="ml-7">{dateLocaleRo(data[0].date)}</span>
    </li>
  );
};

export default StartDateCard;

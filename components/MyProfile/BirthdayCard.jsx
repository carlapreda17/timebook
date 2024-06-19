import { dateLocaleRo } from '../../functions';

const BirthdayCard = ({ classes, birthday }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-cake-candles  mr-2 text-secondary text-xl"></i>Data nasterii{' '}
      </span>
      <span className="ml-7">{dateLocaleRo(birthday)}</span>
    </li>
  );
};

export default BirthdayCard;

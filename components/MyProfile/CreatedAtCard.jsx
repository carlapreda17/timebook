import { dateLocaleRo } from '../../functions';

const CreatedAtCard = ({ classes, createdAt }) => {
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-calendar-plus  mr-2 text-secondary text-xl"></i>Creat{' '}
      </span>
      <span className="ml-7">pe {dateLocaleRo(createdAt)}</span>
    </li>
  );
};

export default CreatedAtCard;

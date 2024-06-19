import Plural from '../Plural';

const ValidatedTimeCard = ({ classes, validatedActivities }) => {
  let validatedTime = validatedActivities.reduce((minutes, v) => (minutes += v.duration), 0);
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-clock mr-2 text-secondary text-xl" />
        Timp validat
      </span>{' '}
      <span className="ml-7">
        <Plural one="ora" many="ore" count={Math.floor(validatedTime / 60)} />
      </span>
    </li>
  );
};

export default ValidatedTimeCard;

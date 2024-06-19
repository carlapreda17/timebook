import Plural from '../Plural';

const TotalWorkTimeCard = ({ classes, data }) => {
  let minutesWorked = data.reduce((minutes, v) => (minutes += v.duration), 0);
  return (
    <li className={classes}>
      <span className="font-semibold">
        <i className="fa-solid fa-clock mr-2 text-secondary text-xl" />
        Timp total lucrat
      </span>{' '}
      <span className="ml-7">
        <Plural one="ora" many="ore" count={Math.floor(minutesWorked / 60)} />
      </span>
    </li>
  );
};

export default TotalWorkTimeCard;

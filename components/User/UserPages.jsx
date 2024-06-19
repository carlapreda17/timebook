import { classnames } from '../../lib';
import MenuItem from '../MenuItem';

const UserPages = ({ open }) => {
  return (
    <>
      <MenuItem href="/user/calendar" level="1">
        <i className="fa-regular fa-calendar-lines-pen w-8 text-xl"></i>
        <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
          Timesheet
        </span>
      </MenuItem>
      <MenuItem href="/user/vacation-requests" level="1">
        <i className="fa-regular fa-calendar-heart w-8 text-xl"></i>
        <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
          Concedii
        </span>
      </MenuItem>
      <MenuItem href="/user/profile" level="1">
        <i className="fa-regular fa-user-pen w-8 text-xl"></i>
        <span
          className={classnames(
            open ? 'opacity-open transition-inherit' : 'opacity-close transition-none'
          )}
        >
          Profilul meu
        </span>
      </MenuItem>
      <MenuItem href="/user/polls" level="1">
        <i className="fa-solid fa-chart-simple w-8 text-xl" />
        <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
          Sondaje
        </span>
      </MenuItem>
    </>
  );
};

export default UserPages;

import { classnames } from '../../lib';
import MenuItem from '../MenuItem';

const VacationsSubItems = ({ open }) => {
  let level = 2;
  if (!open) {
    level = 1;
  }
  return (
    <>
      <MenuItem href="/admin/vacation-requests" level={level}>
        <i className="fa-regular fa-bell pr-3 text-xl" />
        <span className={classnames(open ? 'opacity-open' : 'opacity-close')}>Cereri</span>
      </MenuItem>
      <MenuItem href="/admin/vacation-situations" level={level}>
        <i className="fa-solid fa-list pr-3 text-xl" />
        <span className={classnames(open ? 'opacity-open' : 'opacity-close')}>Situatii</span>
      </MenuItem>
    </>
  );
};

export default VacationsSubItems;

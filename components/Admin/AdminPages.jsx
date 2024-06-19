import MenuItem from '../MenuItem';
import { VacationsMenuItem } from '.';
import { useState } from 'react';
import { classnames } from '../../lib';

const AdminPages = ({ open }) => {
  const [showVacationsSubitems, setShowVacationsSubitems] = useState(false);
  return (
    <>
      <div onClick={() => setShowVacationsSubitems(false)}>
        <MenuItem href="/admin" level="1">
          <i className="fa-solid fa-chart-line w-8 text-xl" />
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Dashboard
          </span>
        </MenuItem>
        <MenuItem href="/admin/projects" level="1">
          <i className="fa-solid fa-laptop-code w-8 text-xl" />
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Proiecte
          </span>
        </MenuItem>
        <MenuItem href="/admin/technical-people" level="1">
          <i className="fa-solid fa-business-time w-8 text-xl" />
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Colaboratori
          </span>
        </MenuItem>
        <MenuItem href="/admin/logbook" level="1">
          <i className="fa-regular fa-calendar-lines-pen w-8 text-xl"></i>
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Logbook
          </span>
        </MenuItem>
        <MenuItem href="/admin/profile" level="1">
          <i className="fa-regular fa-user-pen w-8 text-xl"></i>
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Profilul meu
          </span>
        </MenuItem>
        <MenuItem href="/admin/polls" level="1">
          <i className="fa-solid fa-chart-simple w-8 text-xl" />
          <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
            Sondaje
          </span>
        </MenuItem>
      </div>
      <VacationsMenuItem
        show={showVacationsSubitems}
        setShow={setShowVacationsSubitems}
        open={open}
      />
    </>
  );
};

export default AdminPages;

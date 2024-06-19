import { useEffect } from 'react';
import { VacationsSubItems } from './';
import { classnames } from '../../lib';

const VacationsMenuItem = ({ show, setShow, open }) => {
  ///The 2 useEffect hooks are used to store the state in local storage in order to prevent the submenu from disappearing when
  ///clicking on a page
  useEffect(() => {
    setShow(JSON.parse(window.localStorage.getItem('showVacationsSubitems')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('showVacationsSubitems', show);
  }, [show]);
  return (
    <>
      <div onClick={() => setShow(!show)}>
        <div onClick={() => setShow(!show)}>
          <div className="menu-item default-item cursor-pointer">
            <i className="fa-regular fa-calendar-star w-8 text-xl"></i>
            <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
              Concedii
            </span>
          </div>
        </div>
      </div>
      {show && <VacationsSubItems open={open} />}
    </>
  );
};

export default VacationsMenuItem;

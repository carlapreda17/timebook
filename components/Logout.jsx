import { logout } from '../api';
import { classnames } from '../lib';
import Button from './Button';

const Logout = ({ open }) => {
  return (
    <Button className="menu-item default-item" onClick={logout}>
      <i className="fa-solid fa-right-from-bracket w-8 text-xl" />
      <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
        Logout
      </span>
    </Button>
  );
};

export default Logout;

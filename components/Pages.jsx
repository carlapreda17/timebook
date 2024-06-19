import { AdminPages } from './Admin';
import { UserPages } from './User';

const Pages = ({ role, open }) => {
  if (!role) {
    return null;
  }
  switch (role) {
    case 'admin':
      return <AdminPages open={open} />;
    case 'user':
      return <UserPages open={open} />;
    default:
      return null;
  }
};

export default Pages;

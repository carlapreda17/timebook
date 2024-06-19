import jwt from 'jsonwebtoken';
import Router from 'next/router';

const redirectHome = (token) => {
  const decoded = jwt.decode(token);
  if (!decoded || !('role' in decoded)) {
    return false;
  }

  switch (decoded.role) {
    case 'admin':
      return Router.push('/admin');
    case 'user':
      return Router.push('/user');
    default:
      return false;
  }
};

export default redirectHome;

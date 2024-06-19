import Router from 'next/router';
import jwt from 'jsonwebtoken';

const isRouteAllowed = (token) => {
  const decoded = jwt.decode(token);
  const { role } = decoded;

  const { pathname } = Router;
  if (~pathname.indexOf('/admin') && role === 'admin') {
    return true;
  }
  if (~pathname.indexOf('/user') && role === 'user') {
    return true;
  }
  return false;
};

export default isRouteAllowed;

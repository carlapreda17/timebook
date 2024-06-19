import React, { useEffect } from 'react';
import ensureUser from './ensure-user';
import Router from 'next/router';
import { useQuery } from '../hooks';

const withoutAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { data, status } = useQuery('profile');

    useEffect(async () => {
      if (status === 'success') {
        if (data.role) Router.push(`/${data.role}`);
      }
    }, [status]);

    return <WrappedComponent withoutAuth {...props} />;
  };

  return Wrapper;
};

export default withoutAuth;

import { differenceInYears, parseISO } from 'date-fns';
import React from 'react';

const PersonAge = ({ birthday, suffix = 'ani' }) => {
  const calculateAge = (dob) => {
    const date = parseISO(dob, 'yyyy-MM-dd', new Date());
    const age = differenceInYears(new Date(), date);
    return age;
  };

  return <span>{`${calculateAge(birthday)} ${suffix}`}</span>;
};

export default PersonAge;

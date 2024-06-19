import React from 'react';
import PersonRowSuccess from './PersonRowSuccess';
import { NoRecordsFound } from '..';

const PersonsTableSuccess = ({ data, refetch }) => {
  if (!data.length) {
    return <NoRecordsFound />;
  }

  return (
    <>
      {data.map((person) => {
        return <PersonRowSuccess {...person} key={person._id} refetch={refetch} />;
      })}
    </>
  );
};

export default PersonsTableSuccess;

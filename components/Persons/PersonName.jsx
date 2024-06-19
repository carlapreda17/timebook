import React from 'react';

const PersonName = ({ person }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl">{person.first_name + ' ' + person.last_name}</h1>
    </div>
  );
};

export default PersonName;

import React from 'react';

const PollsCardError = () => {
  return (
    <div className="border flex flex-col justify-between rounded shadow duration-500 hover:scale-105 hover:cursor-pointer">
      <div className="p-4">
        <div className="flex justify-between mb-5">
          <div className="flex justify-between items-center w-full">
            <div className="h-8 w-40 bg-red-200 rounded-md" />
          </div>
        </div>
        <div className="h-4 bg-red-200 rounded-md w-full mb-4" />
        <div className="h-4 bg-red-200 rounded-md w-full" />
      </div>
    </div>
  );
};

export default PollsCardError;

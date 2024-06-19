import React from 'react';
import Bone from '../Bone';

const MyProfileError = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 bg-white rounded-xl shadow p-8 w-96 h-full">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2 bg-secondary rounded-full flex justify-center items-center text-white font-bold text-3xl animate-pulse" />
          <div className="flex flex-col items-center gap-1">
            <Bone type="error" extraClass="w-32 mb-1" />
            <Bone type="error" extraClass="w-20 mb-1" />
          </div>
        </div>
        <div className="flex flex-col divide-y-2">
          <div className="flex items-center py-2">
            <i className="text-secondary fa-solid fa-briefcase w-7 text-xl"></i>
            <Bone type="error" extraClass="w-full" />
          </div>
          <div className="flex items-center py-2">
            <i className="text-secondary fa-solid fa-envelope w-7 text-xl"></i>
            <Bone type="error" extraClass="w-full" />
          </div>
          <div className="flex items-center py-2">
            <i className="text-secondary fa-solid fa-cake-candles w-7 text-xl"></i>
            <Bone type="error" extraClass="w-full" />
          </div>
          <div className="flex items-center py-2">
            <i className="text-secondary fa-solid fa-calendar-plus w-7 text-xl"></i>
            <div className="flex gap-1">
              <p>Creat pe </p>
              <Bone type="error" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfileError;

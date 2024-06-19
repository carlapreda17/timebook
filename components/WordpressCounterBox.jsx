import React from 'react';

const WordpressCounterBox = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-5 bg-primary text-white rounded-lg">
      <i className={icon + ' text-4xl'}></i>
      <h3 className="text-lg">{title}</h3>
      <h2 className="text-lg">{text}</h2>
    </div>
  );
};

export default WordpressCounterBox;

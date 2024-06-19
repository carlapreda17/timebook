import React from 'react';

const PollsCardQuestion = ({ question }) => {
  return (
    <div>
      <div>
        <p className="text-gray-800 text-sm line-clamp-2 dark:text-slate-300">{question}</p>
      </div>
    </div>
  );
};

export default PollsCardQuestion;

import React from 'react';

const FormatDuration = ({ duration, smallText = false }) => {
  if (!duration) {
    return null;
  }

  return (
    <span>
      {duration % 60 === 0 ? (
        <p>
          <span className={smallText ? 'text-xs' : 'text-base'}>{duration / 60}</span>
          <span className="text-xs">h</span>
        </p>
      ) : (
        <p>
          <span className={smallText ? 'text-xs' : 'text-base'}>{Math.floor(duration / 60)}</span>
          <span className="text-xs">h</span>
          <span className={smallText ? 'text-xs' : 'text-base'}>{duration % 60}</span>
          <span className="text-xs">m</span>
        </p>
      )}
    </span>
  );
};

export default FormatDuration;

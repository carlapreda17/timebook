import React from 'react';
import { classnames } from '../lib';
const FormatDuration = ({ duration, smallText = false }) => {
  if (!duration) {
    return null;
  }

  return (
    <span>
      {duration % 60 === 0 ? (
        <p>
          <span className={classnames(smallText ? 'text-xs' : 'text-base', 'tablet:text-xs')}>{duration / 60}</span>
          <span className="text-xs">h</span>
        </p>
      ) : (
        <p>
          <span className={classnames(smallText ? 'text-xs' : 'text-base', 'tablet:text-xs')}>{Math.floor(duration / 60)}</span>
          <span className="text-xs">h</span>
          <span className={classnames(smallText ? 'text-xs' : 'text-base', 'tablet:text-xs')}>{duration % 60}</span>
          <span className="text-xs">m</span>
        </p>
      )}
    </span>
  );
};

export default FormatDuration;

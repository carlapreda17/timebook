const formatActivityDuration = (minutes) => {
  if (minutes % 60 === 0) {
    return minutes / 60 + 'h';
  }
  return Math.floor(minutes / 60) + 'h' + (minutes % 60) + 'm';
};

export default formatActivityDuration;

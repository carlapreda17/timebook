const approximatedHours = (durationMinutes) => {
  const durationHours = durationMinutes / 60;

  return Math.round(durationHours * 4) / 4;
};

export default approximatedHours;

const parseDuration = (duration) => {
  if (duration.indexOf('h') == -1) {
    if (duration.indexOf('m') == -1) {
      if (parseFloat(duration) != duration) return 0;
      let value = parseInt(duration);
      if (value < 10) {
        value = parseFloat(duration) * 60;
        if (parseInt(value) % 15 == 0) return value;
        return 0;
      }
      if (value) return value;
      return 0;
    } else {
      let [minutes, rest] = duration.split('m');
      if (rest.length > 0) return 0;
      if (parseInt(minutes) != minutes) return 0;
      return parseInt(minutes);
    }
  } else {
    if (duration.indexOf('m') == -1) {
      let [hours, minutes] = duration.split('h');
      if (!minutes) minutes = 0;
      if (parseInt(hours) != hours) return 0;
      if (parseInt(minutes) != minutes) return 0;
      return hours * 60 + parseInt(minutes);
    } else {
      let [hours, minutes] = duration.split('h');
      if (parseInt(hours) != hours) return 0;
      let rest;
      [minutes, rest] = minutes.split('m');
      if (parseInt(minutes) != minutes) return 0;
      if (rest.length > 0) return 0;
      return hours * 60 + minutes * 1;
    }
  }
};

export default parseDuration;

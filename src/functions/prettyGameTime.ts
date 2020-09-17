const prettyGameTime = (date: string): string => {
  const daysOfWeek = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];

  const d = new Date(date);
  const day = daysOfWeek[d.getDay()];
  let amOrPm = 'AM';

  let hour = d.getHours();
  if (hour > 12) {
    amOrPm = 'PM';
    hour -= 12;
  }

  const mins = d.getMinutes();
  let prettyMins;
  if (mins === 0) {
    prettyMins = '';
  } else if (mins < 10) {
    prettyMins = ':0' + mins;
  } else {
    prettyMins = ':' + mins;
  }

  return `${day} ${hour}${prettyMins} ${amOrPm}`;
};

export default prettyGameTime;

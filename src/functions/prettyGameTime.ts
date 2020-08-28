const prettyGameTime = (date: Date): string => {
  const daysOfWeek = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];

  const d = new Date(date);
  const day = daysOfWeek[d.getDay()];
  let amOrPm = 'AM';

  let hour = d.getHours();
  if (hour > 12) {
    amOrPm = 'PM';
    hour -= 12;
  }

  const mins = d.getMinutes() || '';

  return `${day} ${hour}${mins && `:${mins}`} ${amOrPm}`;
};

export default prettyGameTime;

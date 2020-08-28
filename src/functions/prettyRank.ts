const prettyRank = (num: number): string => {
  switch (num) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return `${num}th`;
  }
};

export default prettyRank;

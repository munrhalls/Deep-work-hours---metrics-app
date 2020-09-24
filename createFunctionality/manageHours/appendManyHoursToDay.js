import appendSingleHourToDay from './appendSingleHourToDay.js';

function appendManyHoursToDay(numberOfHours, day) {
  for (let j = 1; j <= numberOfHours; j++) {
    appendSingleHourToDay(j, day);
  }
}

export default appendManyHoursToDay;

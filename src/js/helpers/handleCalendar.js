import { getDateFormatted } from './formatDate.js';

const getFirstDayByMonth = 1;
const getAllDaysByMonth = 0;

export let handleChangeDate = {
  handleCurrentMonth: new Date().getMonth(),
  handleCurrentYear: new Date().getFullYear(),
};

export function handleDate() {
  return {
    getCurrentDateFormat(currentYear, currentMonth, currentDay) {
      return new Date(currentYear, currentMonth, currentDay);
    },
    getCurrentDay() {
      return new Date().getDate();
    },
  };
}

const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export function handleCurrenDate(indexMonth) {
  const { handleCurrentYear } = handleChangeDate;
  const firstDayByMonth = new Date(
    handleCurrentYear,
    indexMonth,
    getFirstDayByMonth
  );

  const daysInMonth = new Date(
    handleCurrentYear,
    indexMonth + 1,
    getAllDaysByMonth
  ).getDate();

  const { month, weekday, monthPosition } = getDateFormatted(firstDayByMonth);
  const getDayPosition = weekDays.indexOf(weekday.toLowerCase());

  return {
    getDayPosition,
    month: month.toLowerCase(),
    year: handleCurrentYear,
    daysInMonth,
    monthPosition,
  };
}

export function getDaysInMonth({ getDayPosition, daysInMonth, monthPosition }) {
  const data = [];
  for (let i = 1; i <= getDayPosition + daysInMonth; i++) {
    const day = i - getDayPosition;
    data.push({
      day,
      monthPosition,
    });
  }
  return data;
}

/**
 * getDaysInMonth:
    this function take, position to start for each month and all days in month,
    first one, into a loop.  Loop start in 1 and this limit is sum in getDayPosition and DaysInMonth,
    for example if current month day start in 2 and current month contain 30 days,
    the calendar limit = 32;

    then create a day variable and rest current iterate "i" and rest getDayPosition this one
    should be return something like this [-1 0 1 2 3 4 5] and tada xD take all days and where start 
    each month in this case -1 ignore 0 ignore 1  should be tuesday ref: weekDays. 
 */

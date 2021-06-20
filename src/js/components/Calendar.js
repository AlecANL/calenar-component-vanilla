export function CalendarDay({ day, monthPosition }) {
  const currentDay = new Date().getDate();
  const curentMonth = new Date().getMonth() + 1;
  const isDay = day <= 0 ? 'empty-day' : 'day';
  const isCurrentDay = day === currentDay && curentMonth === +monthPosition;
  return `
        <span class='${isDay} ${
    isCurrentDay && 'current-day'
  }' data-type="day" data-day="${day}">
            ${day <= 0 ? '' : day}
        </span>
    `;
}

export function WeekDays(weekDay) {
  return `
        <span class="weekDay">${weekDay.slice(0, 3)}</span>
    `;
}
export function CurrentDateWidget({ day, weekday, month, year }) {
  return `
    <div class="currentDateWidget">
      <h2>${day}</h2>
      <h1 class="date">${weekday} . ${month} . ${year}</h1>
    </div>
  `;
}

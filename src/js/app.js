import { renderDOM } from './helpers/render.js';
import { getDateFormatted } from './helpers/formatDate.js';
import {
  CalendarDay,
  WeekDays,
  CurrentDateWidget,
} from './components/Calendar.js';
import {
  handleCurrenDate,
  getDaysInMonth,
  handleDate,
} from './helpers/handleCalendar.js';

const $contentWeekDays = document.getElementById('weekDays');
const $contentDays = document.getElementById('days');
const $calendarYear = document.getElementById('year');
const $month = document.getElementById('month');
const $prev = document.getElementById('prev');
const $next = document.getElementById('next');
const $calendar = document.getElementById('calendar');
const $calendarDate = document.getElementById('calendar-date');

const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

let handleCurrentMonth = new Date().getMonth();
let handleCurrentYear = new Date().getFullYear();

function getNextDate() {
  handleCurrentMonth++;
  if (handleCurrentMonth >= 12) {
    handleCurrentYear++;
    handleCurrentMonth = 0;
    console.log(handleCurrentYear);
  }
  currentDate(handleCurrentMonth);
}
function getPreviusDate() {
  handleCurrentMonth--;
  if (handleCurrentMonth < 0) {
    handleCurrentYear--;
    handleCurrentMonth = 11;
  }
  currentDate(handleCurrentMonth);
}

function currentDate(monthPosition = new Date().getMonth()) {
  const date = handleCurrenDate(monthPosition, handleCurrentYear);
  const days = getDaysInMonth(date);
  const { getCurrentDateFormat, getCurrentDay } = handleDate();
  let anotherDate = getCurrentDateFormat(
    handleCurrentYear,
    handleCurrentMonth,
    getCurrentDay()
  );
  let dateFormatted = getDateFormatted(anotherDate);

  renderDOM($contentWeekDays, WeekDays, weekDays);
  renderDOM($contentDays, CalendarDay, days);
  $calendarYear.textContent = date.year;
  $month.textContent = date.month;

  if (new Date().getMonth() + 1 !== +date.monthPosition) {
    anotherDate = getCurrentDateFormat(
      handleCurrentYear,
      handleCurrentMonth,
      1
    );
    dateFormatted = getDateFormatted(anotherDate);
    renderDOM($calendarDate, CurrentDateWidget, dateFormatted);
  }
  renderDOM($calendarDate, CurrentDateWidget, dateFormatted);
}

function handleCalendar(e) {
  if (!e.target.dataset?.type) {
    return;
  }
  const date = new Date(
    handleCurrentYear,
    handleCurrentMonth,
    e.target.dataset?.day
  );

  const dateFormatted = getDateFormatted(date);
  renderDOM($calendarDate, CurrentDateWidget, dateFormatted);
}

currentDate(handleCurrentMonth);
$calendar.addEventListener('click', handleCalendar);
$prev.addEventListener('click', getPreviusDate);
$next.addEventListener('click', getNextDate);

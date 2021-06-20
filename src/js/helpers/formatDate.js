export function getDateFormatted(date = new Date(), localeTime = 'en-us') {
  const day = date.toLocaleDateString(localeTime, {
    day: 'numeric',
  });
  const month = date.toLocaleDateString(localeTime, {
    month: 'long',
  });
  const year = date.toLocaleDateString(localeTime, {
    year: 'numeric',
  });
  const weekday = date.toLocaleDateString(localeTime, {
    weekday: 'long',
  });
  const monthPosition = date.toLocaleDateString('en-us', {
    month: 'numeric',
  });

  return {
    day,
    month,
    year,
    weekday,
    monthPosition,
  };
}

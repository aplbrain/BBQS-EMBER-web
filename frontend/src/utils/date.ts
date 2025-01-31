function getDateString(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
}

function getMonthYear(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  return formatter.format(date);
}

export { getDateString, getMonthYear };

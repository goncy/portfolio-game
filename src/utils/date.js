export function diffInYears(date) {
  const realDate = new Date(date);
  const month_diff = Date.now() - realDate.getTime();
  const distance = new Date(month_diff);
  const year = distance.getUTCFullYear();

  return Math.abs(year - 1970);
}

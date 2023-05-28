
export function getCurrentDateString(): string {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  return `${currentDate.getFullYear()}-${month < 10 ? `0${month}` : month}-${currentDate.getDate()}`
}
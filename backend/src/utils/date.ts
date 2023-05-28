
export function is7orLessDaysDiff(from: Date, to: Date) {
  const diff = to.getTime() - from.getTime();
  return Math.abs(diff / 1000*60*60*24) <= 7;
}

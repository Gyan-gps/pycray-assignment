export const FarmatDate = (date: string) => {

  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

export const generatePages = (totalPages: number | undefined) => {
  const allPages = [];
  if (!totalPages) return;

  let i = 1;
  while (i <= totalPages) {
    allPages.push(i);
    i++;
  }

  return allPages;
};

export const convertDateFormat = (date: string, isMobile?: boolean) => {
  const newDate = new Date(date);

  const leftZeroInHours =
    newDate.getHours() - 3 < 10
      ? '0' + (newDate.getHours() - 3)
      : newDate.getHours() - 3;

  const hours = leftZeroInHours + ':' + newDate.getMinutes();

  const leftZeroInDay =
    newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();

  const leftZeroInMonth =
    newDate.getMonth() < 10 ? '0' + newDate.getMonth() : newDate.getMonth();

  const formattedDate =
    leftZeroInDay + '/' + leftZeroInMonth + '/' + newDate.getFullYear();

  if (!isMobile) {
    return `Criado em ${formattedDate} às ${hours}`;
  }

  return `${formattedDate}`;
};

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

export const convertDateFormat = (date: string) => {
  const newDate = new Date(date);
  console.log(newDate);

  const hours = newDate.getHours() + ':' + newDate.getMinutes();

  const formattedDate =
    newDate.getDay() + '/' + newDate.getMonth() + '/' + newDate.getFullYear();

  console.log('Criado em: ', formattedDate + 'às' + hours);

  return `Criado em ${formattedDate} às ${hours}`;
};

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
